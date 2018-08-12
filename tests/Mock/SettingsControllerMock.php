<?php

namespace TinyIB\Tests\Mock;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Controller\SettingsControllerInterface;

class SettingsControllerMock implements SettingsControllerInterface
{
    /**
     * {@inheritDoc}
     */
    public function settings(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }
}
