<?php

namespace Imageboard\Controller;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exception\ValidationException;
use Imageboard\Model\User;
use Imageboard\Service\{CaptchaService, ConfigService, RendererService};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class AuthController implements ControllerInterface
{
  /** @var CaptchaService */
  protected $captcha;

  /** @var RendererService */
  protected $renderer;

  /** @var ConfigService  */
  protected $config;

  /**
   * Creates a new AuthController instance.
   *
   * @param \Imageboard\Service\CaptchaService  $captcha
   * @param \Imageboard\Service\RendererService $renderer
   * @param \Imageboard\Service\ConfigService   $config
   */
  function __construct(
    CaptchaService $captcha,
    RendererService $renderer,
    ConfigService $config
  ) {
    $this->captcha = $captcha;
    $this->renderer = $renderer;
    $this->config = $config;
  }

  /**
   * Returns register form.
   *
   * @param ServerRequestInterface $request
   *
   * @return string|ResponseInterface Response.
   */
  function registerForm(ServerRequestInterface $request)
  {
    /** @var User */
    $user = $request->getAttribute('user');
    if (!$user->isAnonymous()) {
      // Allow only anonymous user access.
      // Redirect logged in users to the index page.
      $_SESSION['error'] = 'Already logged in';
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD")]);
    }

    // Restore form input from the session.
    $error = isset($_SESSION['error']) ? $_SESSION['error'] : '';
    $email = isset($_SESSION['email']) ? $_SESSION['email'] : '';

    unset($_SESSION['error']);
    unset($_SESSION['email']);

    return $this->renderer->render('auth/register.twig', [
      'error' => $error,
      'email' => $email,
    ]);
  }

  /**
   * Registers user.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface Response.
   */
  function register(ServerRequestInterface $request): ResponseInterface
  {
    /** @var User */
    $user = $request->getAttribute('user');
    if (!$user->isAnonymous()) {
      // Allow only anonymous user access.
      // Redirect logged in users to the index page.
      $_SESSION['error'] = 'Already logged in';
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD")]);
    }

    $data = $request->getParsedBody();
    $email = isset($data['email']) ? $data['email'] : '';
    $password = isset($data['password']) ? $data['password'] : '';

    // Store form input to the session.
    $_SESSION['email'] = $email;

    // Check captcha.
    $captcha = isset($data['captcha']) ? $data['captcha'] : '';
    if (!$this->captcha->checkCaptcha($captcha)) {
      $_SESSION['error'] = 'Incorrect CAPTCHA';
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD") . '/auth/register']);
    }

    try {
      User::createUser($email, $password);
    } catch (ValidationException $e) {
      $_SESSION['error'] = $e->getMessage();
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD") . '/auth/register']);
    }

    // Redirect to the index page.
    return new Response(302, ['Location' => '/' . $this->config->get("BOARD")]);
  }

  /**
   * Returns login form.
   *
   * @param ServerRequestInterface $request
   *
   * @return string|ResponseInterface Response.
   */
  function loginForm(ServerRequestInterface $request)
  {
    /** @var User */
    $user = $request->getAttribute('user');
    if (!$user->isAnonymous()) {
      // Allow only anonymous user access.
      // Redirect logged in users to the index page.
      $_SESSION['error'] = 'Already logged in';
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD")]);
    }

    // Restore form input from the session.
    $error = isset($_SESSION['error']) ? $_SESSION['error'] : '';
    $email = isset($_SESSION['email']) ? $_SESSION['email'] : '';

    unset($_SESSION['error']);
    unset($_SESSION['email']);

    return $this->renderer->render('auth/login.twig', [
      'error' => $error,
      'email' => $email,
    ]);
  }

  /**
   * Logs in user.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface Response.
   */
  function login(ServerRequestInterface $request): ResponseInterface
  {
    /** @var User */
    $user = $request->getAttribute('user');
    if (!$user->isAnonymous()) {
      // Allow only anonymous user access.
      // Redirect logged in users to the index page.
      $_SESSION['error'] = 'Already logged in';
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD")]);
    }

    $data = $request->getParsedBody();
    $email = isset($data['email']) ? $data['email'] : '';
    $password = isset($data['password']) ? $data['password'] : '';

    // Store form input to the session.
    $_SESSION['email'] = $email;

    // Check captcha.
    $captcha = isset($data['captcha']) ? $data['captcha'] : '';
    if (!$this->captcha->checkCaptcha($captcha)) {
      $_SESSION['error'] = 'Incorrect CAPTCHA';
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD") . '/auth/login']);
    }

    try {
      User::login($email, $password);
    } catch (ValidationException $e) {
      $_SESSION['error'] = $e->getMessage();
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD") . '/auth/login']);
    }

    // Redirect to the index page.
    return new Response(302, ['Location' => '/' . $this->config->get("BOARD")]);
  }

  /**
   * Returns logs out user.
   *
   * @return ResponseInterface Response.
   */
  function logout(): ResponseInterface
  {
    User::logout();

    // Redirect to the index page.
    return new Response(302, ['Location' => '/' . $this->config->get("BOARD")]);
  }
}
