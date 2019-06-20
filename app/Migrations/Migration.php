<?php

namespace Imageboard\Migrations;

use Doctrine\DBAL\Schema\Schema;

interface Migration
{
  function apply(Schema $schema);
  function revert(Schema $schema);
}
