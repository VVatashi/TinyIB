<?php

namespace Imageboard\Repositories;

interface CrudRepository extends Repository
{
  function getCount(
    int $date_from = 0,
    int $date_to = (1 << 31) - 1
  );

  function getAll(
    int $date_from = 0,
    int $date_to = (1 << 31) - 1,
    $skip = null,
    $take = null
  );

  function getById(int $id);
}
