<?php

namespace Imageboard\Tests\Unit;

use Imageboard\Models\Post;
use PHPUnit\Framework\TestCase;

class PostTest extends TestCase
{
  public function test_isThread_parentId0_shouldReturnTrue(): void
  {
    $post = new Post(['parent_id' => 0], false);
    $this->assertTrue($post->isThread());
  }

  public function test_isThread_parentIdNot0_shouldReturnFalse(): void
  {
    $post = new Post(['parent_id' => 1], false);
    $this->assertFalse($post->isThread());
  }

  public function test_isReply_parentId0_shouldReturnFalse(): void
  {
    $post = new Post(['parent_id' => 0], false);
    $this->assertFalse($post->isReply());
  }

  public function test_isReply_parentIdNot0_shouldReturnTrue(): void
  {
    $post = new Post(['parent_id' => 1], false);
    $this->assertTrue($post->isReply());
  }

  public function fileSizeProvider(): array
  {
    return [
      [0, '0&nbsp;B'],
      [100, '100&nbsp;B'],
      [500, '500&nbsp;B'],
      [1000, '1&nbsp;KB'],
      [1234, '1.23&nbsp;KB'],
      [12345, '12.34&nbsp;KB'],
      [123456, '123.46&nbsp;KB'],
      [1234567, '1.23&nbsp;MB'],
    ];
  }

  /**
   * @dataProvider fileSizeProvider
   */
  public function test_getFileSizeFormatted(int $input, string $expected): void
  {
    $post = new Post();

    // Try set & get the size of the file attached to the post.
    $post->setFileSize($input);
    $file_size = $post->getFileSizeFormatted();
    $this->assertEquals($expected, $file_size);
  }
}
