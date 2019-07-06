<?php

namespace Imageboard\Repositories;

use Doctrine\DBAL\ParameterType;
use Doctrine\DBAL\Query\QueryBuilder;
use Imageboard\Model\Post;
use Imageboard\Service\{ConfigService, DatabaseService};

class PostRepository implements CrudRepository
{
  /** @var ConfigService */
  protected $config;

  /** @var DatabaseService */
  protected $database;

  /** @var string */
  protected $table;

  function __construct(
    ConfigService $config,
    DatabaseService $database
  ) {
    $this->config = $config;
    $this->database = $database;
    $this->table = $config->get('DBPOSTS', 'posts');
  }

  protected function mapToModel(array $row): Post
  {
    return new Post($row, false);
  }

  function add(Post $post): Post
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->insert($this->table)
      ->values([
        'created_at'    => $builder->createNamedParameter($post->created_at),
        'updated_at'    => $builder->createNamedParameter($post->updated_at),
        'deleted_at'    => $builder->createNamedParameter($post->deleted_at),
        'parent_id'     => $builder->createNamedParameter($post->parent_id),
        'bumped_at'     => $builder->createNamedParameter($post->bumped_at),
        'ip'            => $builder->createNamedParameter($post->ip),
        'user_id'       => $builder->createNamedParameter($post->user_id),
        'name'          => $builder->createNamedParameter($post->name),
        'tripcode'      => $builder->createNamedParameter($post->tripcode),
        'email'         => $builder->createNamedParameter(''),
        'subject'       => $builder->createNamedParameter($post->subject),
        'message'       => $builder->createNamedParameter($post->message),
        'message_raw'   => $builder->createNamedParameter($post->message_raw),
        'password'      => $builder->createNamedParameter(''),
        'file'          => $builder->createNamedParameter($post->file),
        'file_hex'      => $builder->createNamedParameter($post->file_hex),
        'file_original' => $builder->createNamedParameter($post->file_original),
        'file_size'     => $builder->createNamedParameter($post->file_size),
        'image_width'   => $builder->createNamedParameter($post->image_width),
        'image_height'  => $builder->createNamedParameter($post->image_height),
        'thumb'         => $builder->createNamedParameter($post->thumb),
        'thumb_width'   => $builder->createNamedParameter($post->thumb_width),
        'thumb_height'  => $builder->createNamedParameter($post->thumb_height),
        'stickied'      => $builder->createNamedParameter(false, ParameterType::BOOLEAN),
        'moderated'     => $builder->createNamedParameter(true, ParameterType::BOOLEAN),
      ])
      ->execute();

    $post->setId($connection->lastInsertId());
    return $post;
  }

  function update(Post $post): Post
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->update($this->table)
      ->set('created_at', $builder->createNamedParameter($post->created_at))
      ->set('updated_at', $builder->createNamedParameter($post->updated_at))
      ->set('deleted_at', $builder->createNamedParameter($post->deleted_at))
      ->set('parent_id', $builder->createNamedParameter($post->parent_id))
      ->set('bumped_at', $builder->createNamedParameter($post->bumped_at))
      ->set('ip', $builder->createNamedParameter($post->ip))
      ->set('user_id', $builder->createNamedParameter($post->user_id))
      ->set('name', $builder->createNamedParameter($post->name))
      ->set('tripcode', $builder->createNamedParameter($post->tripcode))
      ->set('subject', $builder->createNamedParameter($post->subject))
      ->set('message', $builder->createNamedParameter($post->message))
      ->set('message_raw', $builder->createNamedParameter($post->message_raw))
      ->set('file', $builder->createNamedParameter($post->file))
      ->set('file_hex', $builder->createNamedParameter($post->file_hex))
      ->set('file_original', $builder->createNamedParameter($post->file_original))
      ->set('file_size', $builder->createNamedParameter($post->file_size))
      ->set('image_width', $builder->createNamedParameter($post->image_width))
      ->set('image_height', $builder->createNamedParameter($post->image_height))
      ->set('thumb', $builder->createNamedParameter($post->thumb))
      ->set('thumb_width', $builder->createNamedParameter($post->thumb_width))
      ->set('thumb_height', $builder->createNamedParameter($post->thumb_height))
      ->where('id = ' . $builder->createNamedParameter($post->id))
      ->execute();

    return $post;
  }

  function remove(Post $post): Post
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->update($this->table)
      ->set('deleted_at', $builder->createNamedParameter(time(), ParameterType::INTEGER))
      ->where('id = ' . $builder->createNamedParameter((int)$post->id, ParameterType::INTEGER))
      ->execute();

    $post->setId(null);
    return $post;
  }

  protected function getBaseCountQuery(): QueryBuilder {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    return $builder->select('COUNT(p.id)')
      ->from($this->table, 'p');
  }

  /**
   * @param int $date_from
   * @param int $date_to
   *
   * @return int
   */
  function getCount(
    int $date_from = 0,
    int $date_to = (1 << 31) - 1
  ): int {
    $query = $this->getBaseCountQuery();
    $query = $query->where('p.deleted_at IS NULL')
      ->andWhere('p.created_at >= ' . $query->createNamedParameter($date_from))
      ->andWhere('p.created_at < ' . $query->createNamedParameter($date_to));

    return (int)$query->execute()->fetchColumn();
  }

  /**
   * @return int
   */
  function getThreadCount(): int {
    $query = $this->getBaseCountQuery();
    $query = $query->where('p.deleted_at IS NULL')
      ->andWhere('p.parent_id = 0');

    return (int)$query->execute()->fetchColumn();
  }

  /**
   * Returns the thread reply count by thread ID.
   *
   * @param int $thread_id
   *   Thread ID.
   *
   * @return int
   */
  function getThreadPostCount(int $thread_id): int {
    $query = $this->getBaseCountQuery();
    $query = $query->where('p.deleted_at IS NULL')
      ->andWhere('p.parent_id = ' . $query->createNamedParameter($thread_id));

    return (int)$query->execute()->fetchColumn();
  }

  /**
   * @param int $user_id
   *
   * @return int
   */
  function getUserPostCount(
    int $user_id
  ): int {
    $query = $this->getBaseCountQuery();
    $query = $query->where('p.deleted_at IS NULL')
      ->andWhere('p.user_id = ' . $query->createNamedParameter($user_id))
      ->andWhere('p.parent_id != 0');

    return (int)$query->execute()->fetchColumn();
  }

  /**
   * @param int $user_id
   *
   * @return int
   */
  function getUserThreadCount(
    int $user_id
  ): int {
    $query = $this->getBaseCountQuery();
    $query = $query->where('p.deleted_at IS NULL')
      ->andWhere('p.user_id = ' . $query->createNamedParameter($user_id))
      ->andWhere('p.parent_id = 0');

    return (int)$query->execute()->fetchColumn();
  }

  protected function getBaseQuery(): QueryBuilder {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    return $builder->select(
      'p.id',
      'p.created_at',
      'p.updated_at',
      'p.deleted_at',
      'p.parent_id',
      'p.bumped_at',
      'p.ip',
      'p.user_id',
      'p.name',
      'p.tripcode',
      'p.subject',
      'p.message',
      'p.message_raw',
      'p.file',
      'p.file_hex',
      'p.file_original',
      'p.file_size',
      'p.image_width',
      'p.image_height',
      'p.thumb',
      'p.thumb_width',
      'p.thumb_height'
      )
      ->from($this->table, 'p');
  }

  /**
   * @param int      $date_from
   * @param int      $date_to
   * @param null|int $skip
   * @param null|int $take
   *
   * @return Post[]
   */
  function getAll(
    int $date_from = 0,
    int $date_to = (1 << 31) - 1,
    $skip = null,
    $take = null
  ): array {
    $query = $this->getBaseQuery();
    $query = $query->where('p.deleted_at IS NULL')
      ->andWhere('p.created_at >= ' . $query->createNamedParameter($date_from))
      ->andWhere('p.created_at < ' . $query->createNamedParameter($date_to))
      ->orderBy('p.id', 'desc');

    if (isset($skip)) {
      $query = $query->setFirstResult($skip);
    }

    if (isset($take)) {
      $query = $query->setMaxResults($take);
    }

    $rows = $query->execute()->fetchAll();
    return array_map([$this, 'mapToModel'], $rows);
  }

  /**
   * Returns threads by a board page.
   *
   * @param null|int $skip
   * @param null|int $take
   *
   * @return array
   */
  function getThreads($skip = null, $take = null): array
  {
    $query = $this->getBaseQuery();
    $query = $query->where('p.deleted_at IS NULL')
      ->andWhere('p.parent_id = 0')
      ->orderBy('p.bumped_at', 'desc');

    if (isset($skip)) {
      $query = $query->setFirstResult($skip);
    }

    if (isset($take)) {
      $query = $query->setMaxResults($take);
    }

    $rows = $query->execute()->fetchAll();
    return array_map([$this, 'mapToModel'], $rows);
  }

  /**
   * Returns threads by a board page.
   *
   * @param int $page
   *
   * @return array
   */
  function getThreadsByPage(int $page): array
  {
    $threads_per_page = (int)$this->config->get('THREADSPERPAGE');
    $skip = $page * $threads_per_page;
    $take = $threads_per_page;
    return $this->getThreads($skip, $take);
  }

  /**
   * @param int $thread_id
   * @param int $after_id
   *
   * @return Post[]
   */
  function getThreadPosts(
    int $thread_id,
    int $after_id = 0
  ): array {
    $query = $this->getBaseQuery();
    $expr = $query->expr();
    $query = $query->where('p.deleted_at IS NULL')
      ->andWhere('p.id > ' . $query->createNamedParameter($after_id))
      ->andWhere($expr->orX(
        $expr->eq('p.parent_id', $query->createNamedParameter($thread_id)),
        $expr->eq('p.id', $query->createNamedParameter($thread_id))
      ))
      ->orderBy('p.id', 'asc');

    $rows = $query->execute()->fetchAll();
    return array_map([$this, 'mapToModel'], $rows);
  }

  /**
   * @param int $thread_id
   * @param int $count
   *
   * @return Post[]
   */
  function getLastThreadPosts(
    int $thread_id,
    int $count
  ): array {
    $query = $this->getBaseQuery();
    $expr = $query->expr();
    $query = $query->where('p.deleted_at IS NULL')
      ->andWhere($expr->orX(
        $expr->eq('p.parent_id', $query->createNamedParameter($thread_id)),
        $expr->eq('p.id', $query->createNamedParameter($thread_id))
      ))
      ->orderBy('p.id', 'desc')
      ->setMaxResults($count);

    $rows = $query->execute()->fetchAll();
    return array_reverse(array_map([$this, 'mapToModel'], $rows));
  }

  /**
   * @param int  $id
   * @param bool $only_threads
   * @param bool $with_deleted
   *
   * @return null|Post
   */
  function getById(
    int  $id,
    bool $only_threads = false,
    bool $with_deleted = false
  ) {
    $query = $this->getBaseQuery();
    $query = $query->where('p.id = ' . $query->createNamedParameter($id));

    if ($only_threads) {
      $query = $query->andWhere('p.parent_id = 0');
    }

    if (!$with_deleted) {
      $query = $query->andWhere('p.deleted_at IS NULL');
    }

    $row = $query->execute()->fetch();
    if ($row === false) {
      return null;
    }

    return $this->mapToModel($row);
  }

  /**
   * @return null|Post
   */
  function getLatestPost() {
    $query = $this->getBaseQuery()
      ->where('p.deleted_at IS NULL')
      ->orderBy('p.created_at', 'desc');

    $row = $query->execute()->fetch();
    if ($row === false) {
      return null;
    }

    return $this->mapToModel($row);
  }

  /**
   * Returns the last post by the poster IP.
   *
   * @param string $ip
   *
   * @return null|Post
   */
  function getLatestPostByIP(string $ip)
  {
    $query = $this->getBaseQuery();
    $query = $query->where('p.ip = ' . $query->createNamedParameter($ip))
      ->orderBy('p.id', 'desc');

    $row = $query->execute()->fetch();
    if ($row === false) {
      return null;
    }

    return $this->mapToModel($row);
  }
}
