<?php

use TinyIB\Repository\PDOBanRepository;
use TinyIB\Repository\PDOPostRepository;

if (!defined('TINYIB_BOARD')) {
    die('');
}

/** @var \TinyIB\Repository\IBanRepository $banRepository */
$banRepository = new PDOBanRepository(TINYIB_DBBANS);

/** @var \TinyIB\Repository\IPostRepository $postRepository */
$postRepository = new PDOPostRepository(TINYIB_DBPOSTS);

# Post Functions
function uniquePosts()
{
    global $postRepository;
    return $postRepository->uniquePosts();
}

function postByID($id)
{
    global $postRepository;
    return $postRepository->postByID($id);
}

function threadExistsByID($id)
{
    global $postRepository;
    return $postRepository->threadExistsByID($id);
}

function insertPost($post)
{
    global $postRepository;
    return $postRepository->insertPost($post);
}

function approvePostByID($id)
{
    global $postRepository;
    $postRepository->approvePostByID($id);
}

function stickyThreadByID($id, $setsticky)
{
    global $postRepository;
    $postRepository->stickyThreadByID($id, $setsticky);
}

function bumpThreadByID($id)
{
    global $postRepository;
    $postRepository->bumpThreadByID($id);
}

function countThreads()
{
    global $postRepository;
    return $postRepository->countThreads();
}

function allThreads()
{
    global $postRepository;
    return $postRepository->allThreads();
}

function numRepliesToThreadByID($id)
{
    global $postRepository;
    return $postRepository->numRepliesToThreadByID($id);
}

function postsInThreadByID($id, $moderated_only = true)
{
    global $postRepository;
    return $postRepository->postsInThreadByID($id, $moderated_only);
}

function postsByHex($hex)
{
    global $postRepository;
    return $postRepository->postsByHex($hex);
}

function latestPosts($moderated = true)
{
    global $postRepository;
    return $postRepository->latestPosts($moderated);
}

function deletePostByID($id)
{
    global $postRepository;
    $postRepository->deletePostByID($id);
}

function trimThreads()
{
    global $postRepository;
    $postRepository->trimThreads();
}

function lastPostByIP()
{
    global $postRepository;
    return $postRepository->lastPostByIP();
}

# Ban Functions
function banByID($id)
{
    global $banRepository;
    return $banRepository->banByID($id);
}

function banByIP($ip)
{
    global $banRepository;
    return $banRepository->banByIP($ip);
}

function allBans()
{
    global $banRepository;
    return $banRepository->allBans();
}

function insertBan($ban)
{
    global $banRepository;
    return $banRepository->insertBan($ban);
}

function clearExpiredBans()
{
    global $banRepository;
    $banRepository->clearExpiredBans();
}

function deleteBanByID($id)
{
    global $banRepository;
    $banRepository->deleteBanByID($id);
}
