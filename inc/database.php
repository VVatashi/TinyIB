<?php

use TinyIB\Repository\PDOBanRepository;
use TinyIB\Repository\PDOPostRepository;

if (!defined('TINYIB_BOARD')) {
    die('');
}

/** @var \TinyIB\Repository\IBanRepository $banRepository */
$ban_repository = new PDOBanRepository(TINYIB_DBBANS);

/** @var \TinyIB\Repository\IPostRepository $postRepository */
$post_repository = new PDOPostRepository(TINYIB_DBPOSTS);
