<?php

use TinyIB\Repository\PDORepository;

if (!defined('TINYIB_BOARD')) {
    die('');
}

/** @var \TinyIB\Repository\IRepository $banRepository */
$banRepository = new PDORepository(TINYIB_DBBANS);

/** @var \TinyIB\Repository\IRepository $postRepository */
$postRepository = new PDORepository(TINYIB_DBPOSTS);

# Post Functions
function uniquePosts()
{
    global $postRepository;
    return $postRepository->getCount([], 'distinct(ip)');
}

function postByID($id)
{
    global $postRepository;
    return $postRepository->getOne(['id' => $id]);
}

function threadExistsByID($id)
{
    global $postRepository;
    return $postRepository->getCount([
        'id' => $id,
        'parent' => 0,
        'moderated' => 1,
    ]) > 0;
}

function insertPost($post)
{
    global $postRepository;
    $now = time();

    return $postRepository->insert([
        'parent' => $post['parent'],
        'timestamp' => $now,
        'bumped' => $now,
        'ip' => $_SERVER['REMOTE_ADDR'],
        'name' => $post['name'],
        'tripcode' => $post['tripcode'],
        'email' => $post['email'],
        'nameblock' => $post['nameblock'],
        'subject' => $post['subject'],
        'message' => $post['message'],
        'password' => $post['password'],
        'file' => $post['file'],
        'file_hex' => $post['file_hex'],
        'file_original' => $post['file_original'],
        'file_size' => $post['file_size'],
        'file_size_formatted' => $post['file_size_formatted'],
        'image_width' => $post['image_width'],
        'image_height' => $post['image_height'],
        'thumb' => $post['thumb'],
        'thumb_width' => $post['thumb_width'],
        'thumb_height' => $post['thumb_height'],
        'moderated' => $post['moderated'],
    ]);
}

function approvePostByID($id)
{
    global $postRepository;
    $postRepository->update(['id' => $id], ['moderated' => 1]);
}

function stickyThreadByID($id, $setsticky)
{
    global $postRepository;
    $postRepository->update(['id' => $id], ['stickied' => (int)$setsticky]);
}

function bumpThreadByID($id)
{
    global $postRepository;
    $now = time();

    $postRepository->update(['id' => $id], ['bumped' => $now]);
}

function countThreads()
{
    global $postRepository;
    return $postRepository->getCount(['parent' => 0, 'moderated' => 1]);
}

function allThreads()
{
    global $postRepository;
    return $postRepository->getAll(
        ['parent' => 0, 'moderated' => 1],
        'stickied DESC, bumped DESC'
    );
}

function numRepliesToThreadByID($id)
{
    global $postRepository;
    return $postRepository->getCount(['parent' => $id, 'moderated' => 1]);
}

function postsInThreadByID($id, $moderated_only = true)
{
    global $postRepository;

    $conditions = [
        [
            '#op' => 'OR',
            'id' => $id,
            'parent' => $id,
        ],
    ];

    if ($moderated_only === true) {
        $conditions['moderated'] = 1;
    }

    return $postRepository->getAll($conditions, 'id ASC');
}

function postsByHex($hex)
{
    global $postRepository;
    return $postRepository->getOne(['file_hex' => $hex, 'moderated' => 1]);
}

function latestPosts($moderated = true)
{
    global $postRepository;
    return $postRepository->getRange(
        ['moderated' => (int)$moderated],
        'timestamp DESC',
        10
    );
}

function deletePostByID($id)
{
    global $postRepository;
    $posts = postsInThreadByID($id, false);

    foreach ($posts as $post) {
        if ($post['id'] != $id) {
            deletePostImages($post);
            $postRepository->delete(['id' => $id]);
        } else {
            $thispost = $post;
        }
    }

    if (isset($thispost)) {
        if ($thispost['parent'] == TINYIB_NEWTHREAD) {
            @unlink('res/' . $thispost['id'] . '.html');
        }

        deletePostImages($thispost);
        $postRepository->delete(['id' => $thispost['id']]);
    }
}

function trimThreads()
{
    global $postRepository;
    $limit = (int)TINYIB_MAXTHREADS;

    if ($limit > 0) {
        $results = $postRepository->getRange(
            ['parent' => 0, 'moderated' => 1],
            'stickied DESC, bumped DESC',
            100,
            $limit,
            'id'
        );

        foreach ($results as $post) {
            deletePostByID($post['id']);
        }
    }
}

function lastPostByIP()
{
    global $postRepository;
    return $postRepository->getOne(['ip' => $_SERVER['REMOTE_ADDR']], 'id DESC');
}

# Ban Functions
function banByID($id)
{
    global $banRepository;
    return $banRepository->getOne(['id' => $id]);
}

function banByIP($ip)
{
    global $banRepository;
    return $banRepository->getOne(['ip' => $ip]);
}

function allBans()
{
    global $banRepository;
    return $banRepository->getAll([], 'timestamp DESC');
}

function insertBan($ban)
{
    global $banRepository;
    $now = time();

    return $banRepository->insert([
        'ip' => $ban['ip'],
        'timestamp' => $now,
        'expire' => $ban['expire'],
        'reason' => $ban['reason'],
    ]);
}

function clearExpiredBans()
{
    global $banRepository;
    $now = time();

    $banRepository->delete([
        ['expire' => ['#op' => '>', 0]],
        ['expire' => ['#op' => '<=', $now]],
    ]);
}

function deleteBanByID($id)
{
    global $banRepository;
    $banRepository->delete(['id' => $id]);
}
