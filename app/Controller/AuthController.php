<?php

namespace Imageboard\Controller;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exception\ValidationException;
use Imageboard\Model\User;
use Imageboard\Service\{
  CaptchaService,
  ConfigService,
  RendererService,
  SessionService,
  UserService
};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class AuthController implements ControllerInterface
{
  /** @var CaptchaService */
  protected $captcha;

  /** @var UserService */
  protected $user_service;

  /** @var SessionService */
  protected $session;

  /** @var RendererService */
  protected $renderer;

  /** @var ConfigService  */
  protected $config;

  /**
   * Creates a new AuthController instance.
   *
   * @param CaptchaService  $captcha
   * @param UserService     $user_service
   * @param SessionService  $session
   * @param RendererService $renderer
   * @param ConfigService   $config
   */
  function __construct(
    CaptchaService  $captcha,
    UserService     $user_service,
    SessionService  $session,
    RendererService $renderer,
    ConfigService   $config
  ) {
    $this->captcha      = $captcha;
    $this->user_service = $user_service;
    $this->session      = $session;
    $this->renderer     = $renderer;
    $this->config       = $config;
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
    /** @var User $user */
    $user = $request->getAttribute('user');
    if (!$user->isAnonymous()) {
      // Allow only anonymous user access.
      // Redirect logged in users to the index page.
      $this->session->error = 'Already logged in';
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD")]);
    }

    // Restore form input from the session.
    $error = $this->session->delete('error');
    $email = $this->session->delete('email');

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
    /** @var User $user */
    $user = $request->getAttribute('user');
    if (!$user->isAnonymous()) {
      // Allow only anonymous user access.
      // Redirect logged in users to the index page.
      $this->session->error = 'Already logged in';
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD")]);
    }

    $data = $request->getParsedBody();
    $email = isset($data['email']) ? $data['email'] : '';
    $password = isset($data['password']) ? $data['password'] : '';

    // Store form input to the session.
    $this->session->email = $email;

    // Check captcha.
    $captcha = isset($data['captcha']) ? $data['captcha'] : '';
    if (!$this->captcha->checkCaptcha($captcha)) {
      $this->session->error = 'Incorrect CAPTCHA';
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD") . '/auth/register']);
    }

    try {
      $this->user_service->create($email, $password, 0);
      $this->user_service->login($email, $password);
    } catch (ValidationException $e) {
      $this->session->error = $e->getMessage();
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
    /** @var User $user */
    $user = $request->getAttribute('user');
    if (!$user->isAnonymous()) {
      // Allow only anonymous user access.
      // Redirect logged in users to the index page.
      $this->session->error = 'Already logged in';
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD")]);
    }

    // Restore form input from the session.
    $error = $this->session->delete('error');
    $email = $this->session->delete('email');

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
    /** @var User $user */
    $user = $request->getAttribute('user');
    if (!$user->isAnonymous()) {
      // Allow only anonymous user access.
      // Redirect logged in users to the index page.
      $this->session->error = 'Already logged in';
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD")]);
    }

    $data = $request->getParsedBody();
    $email = isset($data['email']) ? $data['email'] : '';
    $password = isset($data['password']) ? $data['password'] : '';

    // Store form input to the session.
    $this->session->email = $email;

    // Check captcha.
    $captcha = isset($data['captcha']) ? $data['captcha'] : '';
    if (!$this->captcha->checkCaptcha($captcha)) {
      $this->session->error = 'Incorrect CAPTCHA';
      return new Response(302, ['Location' => '/' . $this->config->get("BOARD") . '/auth/login']);
    }

    try {
      $this->user_service->login($email, $password);
    } catch (ValidationException $e) {
      $this->session->error = $e->getMessage();
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
    $this->user_service->logout();

    // Redirect to the index page.
    return new Response(302, ['Location' => '/' . $this->config->get("BOARD")]);
  }
}
