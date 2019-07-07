<?php

namespace Imageboard\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\DBAL\Query\QueryBuilder;

interface MigrationInterface
{
  function apply(Schema $schema);
  function upgradeData(QueryBuilder $builder);

  function revert(Schema $schema);
}
