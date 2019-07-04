<?php

namespace Imageboard\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\DBAL\Query\QueryBuilder;

abstract class Migration implements MigrationInterface
{
  abstract function apply(Schema $schema);

  function upgradeData(QueryBuilder $builder) { }

  abstract function revert(Schema $schema);
}
