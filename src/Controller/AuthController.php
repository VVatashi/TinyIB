<?php

namespace TinyIB\Controller;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Service\CaptchaServiceInterface;
use TinyIB\Service\RendererServiceInterface;
use TinyIB\ValidationException;
use TinyIB\Model\User;

class AuthController implements AuthControllerInterface
{
    /** @var \TinyIB\Service\CaptchaService $captcha_service */
    protected $captcha_service;

    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    /**
     * Creates a new AuthController instance.
     */
    public function __construct(
        CaptchaServiceInterface $captcha_service,
        RendererServiceInterface $renderer
    ) {
        $this->captcha_service = $captcha_service;
        $this->renderer = $renderer;
    }

    /**
     * {@inheritDoc}
     */
    public function registerForm(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\User $user */
        $user = $request->getAttribute('user');
        if (!$user->isAnonymous()) {
            // Allow only anonymous user access.
            // Redirect logged in users to the index page.
            $_SESSION['error'] = 'Already logged in';
            return new Response(302, ['Location' => '/' . TINYIB_BOARD]);
        }

        // Restore form input from the session.
        $error = isset($_SESSION['error']) ? $_SESSION['error'] : '';
        $email = isset($_SESSION['email']) ? $_SESSION['email'] : '';

        unset($_SESSION['error']);
        unset($_SESSION['email']);

        $content = $this->renderer->render('auth/register.twig', [
            'error' => $error,
            'email' => $email,
        ]);

        return new Response(200, [], $content);
    }

    /**
     * {@inheritDoc}
     */
    public function register(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\User $user */
        $user = $request->getAttribute('user');
        if (!$user->isAnonymous()) {
            // Allow only anonymous user access.
            // Redirect logged in users to the index page.
            $_SESSION['error'] = 'Already logged in';
            return new Response(302, ['Location' => '/' . TINYIB_BOARD]);
        }

        $data = $request->getParsedBody();
        $email = isset($data['email']) ? $data['email'] : '';
        $password = isset($data['password']) ? $data['password'] : '';

        // Store form input to the session.
        $_SESSION['email'] = $email;

        // Check captcha.
        $captcha = isset($data['captcha']) ? $data['captcha'] : '';
        if (!$this->captcha_service->checkCaptcha($captcha)) {
            $_SESSION['error'] = 'Incorrect CAPTCHA';
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/auth/register']);
        }

        try {
            User::register($email, $password);
            //User::login($email, $password);
        }
        catch(ValidationException $e) {
            $_SESSION['error'] = $e->getMessage();
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/auth/register']);
        }

        // Redirect to the index page.
        return new Response(302, ['Location' => '/' . TINYIB_BOARD]);
    }

    /**
     * {@inheritDoc}
     */
    public function loginForm(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\User $user */
        $user = $request->getAttribute('user');
        if (!$user->isAnonymous()) {
            // Allow only anonymous user access.
            // Redirect logged in users to the index page.
            $_SESSION['error'] = 'Already logged in';
            return new Response(302, ['Location' => '/' . TINYIB_BOARD]);
        }

        // Restore form input from the session.
        $error = isset($_SESSION['error']) ? $_SESSION['error'] : '';
        $email = isset($_SESSION['email']) ? $_SESSION['email'] : '';

        unset($_SESSION['error']);
        unset($_SESSION['email']);

        $content = $this->renderer->render('auth/login.twig', [
            'error' => $error,
            'email' => $email,
        ]);

        return new Response(200, [], $content);
    }

    /**
     * {@inheritDoc}
     */
    public function login(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\User $user */
        $user = $request->getAttribute('user');
        if (!$user->isAnonymous()) {
            // Allow only anonymous user access.
            // Redirect logged in users to the index page.
            $_SESSION['error'] = 'Already logged in';
            return new Response(302, ['Location' => '/' . TINYIB_BOARD]);
        }

        $data = $request->getParsedBody();
        $email = isset($data['email']) ? $data['email'] : '';
        $password = isset($data['password']) ? $data['password'] : '';

        // Store form input to the session.
        $_SESSION['email'] = $email;

        // Check captcha.
        $captcha = isset($data['captcha']) ? $data['captcha'] : '';
        if (!$this->captcha_service->checkCaptcha($captcha)) {
            $_SESSION['error'] = 'Incorrect CAPTCHA';
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/auth/login']);
        }

        try {
            User::login($email, $password);
        }
        catch(ValidationException $e) {
            $_SESSION['error'] = $e->getMessage();
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/auth/login']);
        }

        // Redirect to the index page.
        return new Response(302, ['Location' => '/' . TINYIB_BOARD]);
    }

    /**
     * {@inheritDoc}
     */
    public function logout() : ResponseInterface
    {
        User::logout();

        // Redirect to the index page.
        return new Response(302, ['Location' => '/' . TINYIB_BOARD]);
    }
}
