<?php

namespace Imageboard\Controllers\Api;

use Imageboard\Exceptions\{NotFoundException, ValidationException};
use Imageboard\Controllers\ControllerInterface;
use Imageboard\Models\{Post, Vote};
use Imageboard\Repositories\{PostRepository, VoteRepository};
use Imageboard\Services\ConfigService;
use GuzzleHttp\Psr7\Response;
use Predis\Client as Redis;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class VoteController implements ControllerInterface
{
  /** @var ConfigService */
  protected $config;

  /** @var PostRepository */
  protected $post_repository;

  /** @var VoteRepository */
  protected $repository;

  function __construct(
    ConfigService $config,
    PostRepository $post_repository,
    VoteRepository $repository
  ) {
    $this->config = $config;
    $this->post_repository = $post_repository;
    $this->repository = $repository;
  }

  protected function mapToViewModel(Post $post, Vote $vote): array
  {
    return [
      'id'          => $vote->id,
      'post_id'     => $vote->post_id,
      'user_id'     => $vote->user_id,
      'score'       => $vote->score,
      'total_score' => $post->score + $vote->score,
    ];
  }

  /**
   * @api {post} /api/votes Submit vote
   * @apiName Submit vote
   * @apiGroup vote
   * @apiVersion 0.1.0
   * @apiDescription Creates vote.
   *
   * @apiParam (Body) {Integer} post_id Post ID to vote for.
   * @apiParam (Body) {Integer} score   Score of the vote.
   *
   * @apiParamExample {json} Example
   *  {
   *    "post_id": 435536,
   *    "score":   1,
   *  }
   *
   * @apiSuccess (Success 201) {Number} id          Created vote ID.
   * @apiSuccess (Success 201) {Number} post_id     Post ID.
   * @apiSuccess (Success 201) {Number} user_id     User ID.
   * @apiSuccess (Success 201) {Number} score       Added score value.
   * @apiSuccess (Success 201) {Number} total_score Total post score value.
   *
   * @apiSuccessExample {json} Example
   *  {
   *    "id":          1,
   *    "post_id":     435536,
   *    "user_id":     31,
   *    "score":       1,
   *    "total_score": 2
   *  }
   */

  /**
   * Creates vote for post.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface Respobse.
   */
  function vote(ServerRequestInterface $request): ResponseInterface
  {
    if ($request->getHeaderLine('Content-Type') === 'application/json') {
      $data = json_decode((string) $request->getBody(), true);
    } else {
      $data = $request->getParsedBody();
    }

    $post_id = (int) ($data['post_id'] ?? 0);
    $user_id = $request->getAttribute('user')->id;
    $score = (int) ($data['score'] ?? 0);
    $score = $score > 0 ? 1 : ($score < 0 ? -1 : 0);

    $post = $this->post_repository->getById($post_id);
    if (!isset($post)) {
      throw new NotFoundException("Post #$post_id was not found");
    }

    $existing = $this->repository->get($post_id, $user_id);
    if (isset($existing)) {
      throw new ValidationException("Post #$post_id has already been voted");
    }

    $vote = new Vote([
      'post_id' => $post_id,
      'user_id' => $user_id,
      'score'   => $score,
    ]);
    $this->repository->add($vote);

    $redis_host = $this->config->get('REDIS_HOST', '');
    if (!empty($redis_host)) {
      // Send post to the redis queue.
      $board = $this->config->get('BOARD');
      $parent = $post->isThread() ? $post->id : $post->parent_id;
      $channel = "$board:thread:$parent";
      $data = [
        'id'          => $vote->id,
        'post_id'     => $post_id,
        'user_id'     => $user_id,
        'score'       => $score,
        'total_score' => $post->score + $score,
      ];

      $message = json_encode([
        'type' => 'vote',
        'data' => $data,
      ]);

      $redis = new Redis($redis_host);
      $redis->publish($channel, $message);
      $redis->quit();
    }

    return new Response(201, [], json_encode($this->mapToViewModel($post, $vote)));
  }
}
