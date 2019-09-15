<?php

namespace Imageboard\Controllers;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exceptions\ValidationException;
use Imageboard\Models\User;
use Imageboard\Services\{
  ConfigService,
  RendererService,
  SessionService,
  UserService
};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class AuthController implements ControllerInterface
{
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
   * @param UserService     $user_service
   * @param SessionService  $session
   * @param RendererService $renderer
   * @param ConfigService   $config
   */
  function __construct(
    UserService     $user_service,
    SessionService  $session,
    RendererService $renderer,
    ConfigService   $config
  ) {
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

    try {
      $this->user_service->create($email, $password, 0);
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
