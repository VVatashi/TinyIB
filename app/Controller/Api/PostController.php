<?php

namespace Imageboard\Controller\Api;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exception\{AccessDeniedException, NotFoundException};
use Imageboard\Model\User;
use Imageboard\Controller\ControllerInterface;
use Imageboard\Service\{PostService, UserService};
use Imageboard\Repositories\PostRepository;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class PostController implements ControllerInterface
{
  /** @var PostRepository */
  protected $post_repository;

  /** @var PostService */
  protected $post_service;

  /** @var UserService */
  protected $user_service;

  function __construct(
    PostRepository $post_repository,
    PostService    $post_service,
    UserService    $user_service
  ) {
    $this->post_repository = $post_repository;
    $this->post_service    = $post_service;
    $this->user_service    = $user_service;
  }

  /**
   * @api {post} /api/threads Create thread
   * @apiName Create thread
   * @apiGroup post
   * @apiVersion 0.1.0
   * @apiDescription Creates new thread.
   *
   * @apiParam (Body) {String{..75}}   [name]    Poster name. Can contain tripcode and secure tripcode.
   * @apiParam (Body) {String{..75}}   [subject] Post subject. Can contain additional post options.
   * @apiParam (Body) {String{..8000}} [message] Post message.
   * @apiParam (Body) {File}           file      Post file.
   *
   * @apiParamExample {json} Example
   *  {
   *    "name":    "Usernaem",
   *    "message": "Lorem ipsum dolor sit amet"
   *  }
   *
   * @apiError (Error 400) {String} error Error message.
   *
   * @apiErrorExample {json} File is required
   *  {
   *    "error": "A file is required to start a thread."
   *  }
   *
   * @apiSuccess (Success 201) {Number} id Created post ID.
   *
   * @apiSuccessExample {json} Example
   *  {
   *    "id": 104
   *  }
   */

  /**
   * Creates thread.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   */
  function createThread(ServerRequestInterface $request): ResponseInterface {
    if ($request->getHeaderLine('Content-Type') === 'application/json') {
      $data = json_decode((string)$request->getBody(), true);
    } else {
      $data = $request->getParsedBody();
    }

    $name      = $data['name'] ?? '';
    $subject   = $data['subject'] ?? '';
    $message   = $data['message'] ?? '';
    $ip        = $_SERVER['REMOTE_ADDR'] ?? '';
    $user_id   = $request->getAttribute('user')->id;
    $parent_id = 0;

    try {
      $post = $this->post_service->create(
        $name,
        '',
        $subject,
        $message,
        '',
        $ip,
        $user_id,
        $parent_id
      );
    } catch (\Exception $exception) {
      return new Response(400, [], json_encode([
        'error' => $exception->getMessage(),
      ]));
    }

    return new Response(201, [], json_encode([
      'id' => $post->id,
    ]));
  }

  /**
   * @api {post} /api/threads/:id/posts Create post
   * @apiName Create post
   * @apiGroup post
   * @apiVersion 0.1.0
   * @apiDescription Creates new post.
   *
   * @apiParam (Url)  {Number}         id        Parent thread ID.
   * @apiParam (Body) {String{..75}}   [name]    Poster name. Can contain tripcode and secure tripcode.
   * @apiParam (Body) {String{..75}}   [subject] Post subject. Can contain additional post options.
   * @apiParam (Body) {String{..8000}} [message] Post message.
   * @apiParam (Body) {File}           [file]    Post file.
   *
   * @apiParamExample {json} Example
   *  {
   *    "id":      87
   *    "name":    "Usernaem",
   *    "message": "Lorem ipsum dolor sit amet"
   *  }
   *
   * @apiError (Error 400) {String} error Error message.
   *
   * @apiErrorExample {json} Message or file is required
   *  {
   *    "error": "Please enter a message and/or upload a file."
   *  }
   *
   * @apiSuccess (Success 201) {Number} id Created post ID.
   *
   * @apiSuccessExample {json} Example
   *  {
   *    "id": 105
   *  }
   */

  /**
   * Creates post.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return ResponseInterface
   */
  function createPost(ServerRequestInterface $request, array $args): ResponseInterface {
    if ($request->getHeaderLine('Content-Type') === 'application/json') {
      $data = json_decode((string)$request->getBody(), true);
    } else {
      $data = $request->getParsedBody();
    }

    $name      = $data['name'] ?? '';
    $subject   = $data['subject'] ?? '';
    $message   = $data['message'] ?? '';
    $ip        = $_SERVER['REMOTE_ADDR'] ?? '';
    $user_id   = $request->getAttribute('user')->id;
    $parent_id = (int)($args['id'] ?? 0);

    try {
      $post = $this->post_service->create(
        $name,
        '',
        $subject,
        $message,
        '',
        $ip,
        $user_id,
        $parent_id
      );
    } catch (\Exception $exception) {
      return new Response(400, [], json_encode([
        'error' => $exception->getMessage(),
      ]));
    }

    return new Response(201, [], json_encode([
      'id' => $post->id,
    ]));
  }

  /**
   * @api {delete} /api/posts/:id Delete post
   * @apiName Delete post
   * @apiGroup post
   * @apiVersion 0.1.0
   * @apiDescription Deletes post.
   *
   * @apiParam (Url) {Number} id Post ID.
   *
   * @apiParamExample {json} Example
   *  {
   *    "id": 104
   *  }
   */

  /**
   * Deletes post.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return ResponseInterface
   *
   * @throws NotFoundException
   * @throws AccessDeniedException
   */
  function delete(ServerRequestInterface $request, array $args): ResponseInterface {
    $id = (int)($args['id'] ?? 0);
    $post = $this->post_repository->getById($id);
    if (!isset($post)) {
      throw new NotFoundException();
    }

    /** @var User $user */
    $user = $request->getAttribute('user');
    if (!$user->isMod()
      && $user->id !== $post->user_id
      && $_SERVER['REMOTE_ADDR'] !== $post->ip) {
      throw new AccessDeniedException();
    }

    try {
      $this->post_service->delete($id, $user);
    } catch (\Exception $exception) {
      return new Response(400, [], json_encode([
        'error' => $exception->getMessage(),
      ]));
    }

    return new Response(204);
  }

  /**
   * @api {get} /api/threads Get all threads
   * @apiName Get all threads
   * @apiGroup post
   * @apiVersion 0.1.0
   * @apiDescription Returns all threads.
   *
   * @apiSuccess (Success 200) {Object[]} -               List of threads.
   * @apiSuccess (Success 200) {Number}   -.id            Thread ID.
   * @apiSuccess (Success 200) {Number}   -.created_at    Creation timestamp.
   * @apiSuccess (Success 200) {Number}   -.updated_at    Last update timestamp.
   * @apiSuccess (Success 200) {Number}   -.parent_id     Parent thread ID.
   * @apiSuccess (Success 200) {Number}   -.bumped_at	    Last bump timestamp.
   * @apiSuccess (Success 200) {String}   -.name          Poster name.
   * @apiSuccess (Success 200) {String}   -.tripcode      Poster tripcode.
   * @apiSuccess (Success 200) {String}   -.subject       Post subject.
   * @apiSuccess (Success 200) {String}   -.message       Post message HTML fragment.
   * @apiSuccess (Success 200) {String}   -.message_raw   Raw post message.
   * @apiSuccess (Success 200) {Object[]} -.message_tree  Parsed post message.
   * @apiSuccess (Success 200) {Number[]} -.refs_from     IDs of posts that references this post.
   * @apiSuccess (Success 200) {Number[]} -.refs_to       IDs of posts referenced in this post.
   * @apiSuccess (Success 200) {String}   -.file          File URL.
   * @apiSuccess (Success 200) {String}   -.file_hex      File hash.
   * @apiSuccess (Success 200) {String}   -.file_original Original file name.
   * @apiSuccess (Success 200) {Number}   -.file_size     File size, bytes.
   * @apiSuccess (Success 200) {Number}   -.image_width   Image height.
   * @apiSuccess (Success 200) {Number}   -.image_height  Image width.
   * @apiSuccess (Success 200) {String}   -.thumb         Thubmnail URL.
   * @apiSuccess (Success 200) {Number}   -.thumb_width   Thumbnail width.
   * @apiSuccess (Success 200) {Number}   -.thumb_height  Thumbnail height.
   *
   * @apiSuccessExample {json} Example
   *  [
   *    {
   *      "id":          87,
   *      "created_at":  1558425161,
   *      "updated_at":  1559039766,
   *      "parent_id":   0,
   *      "bumped_at":   1562240007,
   *      "name":        "",
   *      "tripcode":    "piec1MorXg",
   *      "subject":     "",
   *      "message":     "Test thread 2<br>",
   *      "message_raw": "Test thread 2\n",
   *      "message_tree": [
   *        {
   *          "type": "text",
   *          "text": "Test thread 2\n"
   *        }
   *      ],
   *      "file":          "1558425160552.jpg",
   *      "file_hex":      "b49c1ae1fe98df5d004cac4e5e08dde7",
   *      "file_original": "mpv-shot0032.jpg",
   *      "file_size":     91443,
   *      "image_width":   630,
   *      "image_height":  720,
   *      "thumb":         "1558425160552s.jpg",
   *      "thumb_width":   219,
   *      "thumb_height":  250
   *    },
   *    {
   *      "id":          46,
   *      "created_at":  1557996334,
   *      "updated_at":  1558425141,
   *      "parent_id":   0,
   *      "bumped_at":   1558425141,
   *      "name":        "",
   *      "tripcode":    "",
   *      "subject":     "",
   *      "message":     "test thread<br>",
   *      "message_raw": "test thread\n",
   *      "message_tree": [
   *        {
   *          "type": "text",
   *          "text": "test thread\n"
   *        }
   *      ],
   *      "refs_from":     [],
   *      "refs_to":       [],
   *      "file":          "1557996334020.jpg",
   *      "file_hex":      "f649ff8c9f284fe845eceaba6f952034",
   *      "file_original": "6d8e7849291fa85afad3fde646763b30.jpg",
   *      "file_size":     425412,
   *      "image_width":   630,
   *      "image_height":  895,
   *      "thumb":         "1557996334020s.jpg",
   *      "thumb_width":   176,
   *      "thumb_height":  250
   *    }
   *  ]
   */

  /**
   * Returns threads.
   *
   * @return array Array of thread view models.
   */
  function threads(): array {
    return $this->post_service->getThreads();
  }

  /**
   * @api {get} /api/threads/:id/posts Get all thread posts
   * @apiName Get all thread posts
   * @apiGroup post
   * @apiVersion 0.1.0
   * @apiDescription Returns all thread posts.
   *
   * @apiParam (Url) {Number} id Parent thread ID.
   *
   * @apiParamExample {json} Example
   *  {
   *    "id": 87
   *  }
   *
   * @apiSuccess (Success 200) {Object[]} -               List of posts.
   * @apiSuccess (Success 200) {Number}   -.id            Post ID.
   * @apiSuccess (Success 200) {Number}   -.created_at    Creation timestamp.
   * @apiSuccess (Success 200) {Number}   -.updated_at    Last update timestamp.
   * @apiSuccess (Success 200) {Number}   -.parent_id     Parent thread ID.
   * @apiSuccess (Success 200) {Number}   -.bumped_at	    Last bump timestamp.
   * @apiSuccess (Success 200) {String}   -.name          Poster name.
   * @apiSuccess (Success 200) {String}   -.tripcode      Poster tripcode.
   * @apiSuccess (Success 200) {String}   -.subject       Post subject.
   * @apiSuccess (Success 200) {String}   -.message       Post message HTML fragment.
   * @apiSuccess (Success 200) {String}   -.message_raw   Raw post message.
   * @apiSuccess (Success 200) {Object[]} -.message_tree  Parsed post message.
   * @apiSuccess (Success 200) {Number[]} -.refs_from     IDs of posts that references this post.
   * @apiSuccess (Success 200) {Number[]} -.refs_to       IDs of posts referenced in this post.
   * @apiSuccess (Success 200) {String}   -.file          File URL.
   * @apiSuccess (Success 200) {String}   -.file_hex      File hash.
   * @apiSuccess (Success 200) {String}   -.file_original Original file name.
   * @apiSuccess (Success 200) {Number}   -.file_size     File size, bytes.
   * @apiSuccess (Success 200) {Number}   -.image_width   Image height.
   * @apiSuccess (Success 200) {Number}   -.image_height  Image width.
   * @apiSuccess (Success 200) {String}   -.thumb         Thubmnail URL.
   * @apiSuccess (Success 200) {Number}   -.thumb_width   Thumbnail width.
   * @apiSuccess (Success 200) {Number}   -.thumb_height  Thumbnail height.
   *
   * @apiSuccessExample {json} Example
   *  [
   *    {
   *      "id":          87,
   *      "created_at":  1558425161,
   *      "updated_at":  1559039766,
   *      "parent_id":   0,
   *      "bumped_at":   1562240007,
   *      "name":        "",
   *      "tripcode":    "piec1MorXg",
   *      "subject":     "",
   *      "message":     "Test thread 2<br>",
   *      "message_raw": "Test thread 2\n",
   *      "message_tree": [
   *        {
   *          "type": "text",
   *          "text": "Test thread 2\n"
   *        }
   *      ],
   *      "refs_from":     [],
   *      "refs_to":       [],
   *      "file":          "1558425160552.jpg",
   *      "file_hex":      "b49c1ae1fe98df5d004cac4e5e08dde7",
   *      "file_original": "mpv-shot0032.jpg",
   *      "file_size":     91443,
   *      "image_width":   630,
   *      "image_height":  720,
   *      "thumb":         "1558425160552s.jpg",
   *      "thumb_width":   219,
   *      "thumb_height":  250
   *    }
   *  ]
   */

  /**
   * Returns thread posts.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return array Array of post view models.
   */
  function threadPosts(ServerRequestInterface $request, array $args): array {
    $thread_id = (int)$args['id'];
    $params = $request->getQueryParams();
    $after_id = (int)($params['after'] ?? 0);
    return $this->post_service->getThreadPosts($thread_id, $after_id);
  }

  /**
   * @api {get} /api/posts/:id Get post
   * @apiName Get post
   * @apiGroup post
   * @apiVersion 0.1.0
   * @apiDescription Returns post data.
   *
   * @apiParam (Url) {Number} id Post ID.
   *
   * @apiParamExample {json} Example
   *  {
   *    "id": 87
   *  }
   *
   * @apiSuccess (Success 200) {Number}   id            Post ID.
   * @apiSuccess (Success 200) {Number}   created_at    Creation timestamp.
   * @apiSuccess (Success 200) {Number}   updated_at    Last update timestamp.
   * @apiSuccess (Success 200) {Number}   parent_id     Parent thread ID.
   * @apiSuccess (Success 200) {Number}   bumped_at	    Last bump timestamp.
   * @apiSuccess (Success 200) {String}   name          Poster name.
   * @apiSuccess (Success 200) {String}   tripcode      Poster tripcode.
   * @apiSuccess (Success 200) {String}   subject       Post subject.
   * @apiSuccess (Success 200) {String}   message       Post message HTML fragment.
   * @apiSuccess (Success 200) {String}   message_raw   Raw post message.
   * @apiSuccess (Success 200) {Object[]} message_tree  Parsed post message.
   * @apiSuccess (Success 200) {Number[]} refs_from     IDs of posts that references this post.
   * @apiSuccess (Success 200) {Number[]} refs_to       IDs of posts referenced in this post.
   * @apiSuccess (Success 200) {String}   file          File URL.
   * @apiSuccess (Success 200) {String}   file_hex      File hash.
   * @apiSuccess (Success 200) {String}   file_original Original file name.
   * @apiSuccess (Success 200) {Number}   file_size     File size, bytes.
   * @apiSuccess (Success 200) {Number}   image_width   Image height.
   * @apiSuccess (Success 200) {Number}   image_height  Image width.
   * @apiSuccess (Success 200) {String}   thumb         Thubmnail URL.
   * @apiSuccess (Success 200) {Number}   thumb_width   Thumbnail width.
   * @apiSuccess (Success 200) {Number}   thumb_height  Thumbnail height.
   *
   * @apiSuccessExample {json} Example
   *  {
   *    "id":          87,
   *    "created_at":  1558425161,
   *    "updated_at":  1559039766,
   *    "parent_id":   0,
   *    "bumped_at":   1562240007,
   *    "name":        "",
   *    "tripcode":    "piec1MorXg",
   *    "subject":     "",
   *    "message":     "Test thread 2<br>",
   *    "message_raw": "Test thread 2\n",
   *    "message_tree": [
   *      {
   *        "type": "text",
   *        "text": "Test thread 2\n"
   *      }
   *    ],
   *    "refs_from":     [],
   *    "refs_to":       [],
   *    "file":          "1558425160552.jpg",
   *    "file_hex":      "b49c1ae1fe98df5d004cac4e5e08dde7",
   *    "file_original": "mpv-shot0032.jpg",
   *    "file_size":     91443,
   *    "image_width":   630,
   *    "image_height":  720,
   *    "thumb":         "1558425160552s.jpg",
   *    "thumb_width":   219,
   *    "thumb_height":  250
   *  }
   */

  /**
   * Returns post.
   *
   * @param array $args Path arguments.
   *
   * @return array Post view models.
   */
  function post(array $args): array {
    $id = (int)$args['id'];
    return $this->post_service->getById($id);
  }
}
