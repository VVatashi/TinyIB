<?php

namespace Imageboard\Tests\Mock;

use GuzzleHttp\Psr7\Response;
use Imageboard\Controller\SettingsControllerInterface;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

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
