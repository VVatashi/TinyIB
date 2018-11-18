<?php

namespace TinyIB\Controller;

use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Psr7\Stream;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Service\CaptchaServiceInterface;

class CaptchaController implements CaptchaControllerInterface
{
    /** @var \TinyIB\Service\CaptchaServiceInterface $captcha_service */
    protected $captcha_service;

    /**
     * Constructs a new captcha controller.
     */
    public function __construct(CaptchaServiceInterface $captcha_service)
    {
        $this->captcha_service = $captcha_service;
    }

    /**
     * {@inheritDoc}
     */
    public function captcha() : ResponseInterface
    {
        // Create CAPTCHA text and store it in the session.
        $text = $this->captcha_service->getText();
        $_SESSION['tinyibcaptcha'] = $text;

        // Create CAPTCHA image from the text and write it to the response.
        $image = $this->captcha_service->getImage($text);
        $stream = fopen('php://temp', 'w+');
        imagepng($image, $stream);
        imagedestroy($image);
        return new Response(200, ['Content-Type' => 'image/png'], $stream);
    }
}
