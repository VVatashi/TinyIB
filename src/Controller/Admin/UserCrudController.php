<?php

namespace TinyIB\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Model\User;
use TinyIB\Repository\UserRepositoryInterface;
use TinyIB\Service\RendererServiceInterface;
use TinyIB\Service\UserServiceInterface;

class UserCrudController implements UserCrudControllerInterface
{
    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    /** @var \TinyIB\Repository\UserRepositoryInterface $user_repository */
    protected $user_repository;

    /** @var \TinyIB\Service\UserServiceInterface $user_service */
    protected $user_service;

    /**
     * Creates a new AuthController instance.
     *
     * @param RendererServiceInterface $renderer
     * @param UserRepositoryInterface $user_repository
     * @param UserServiceInterface $user_service
     */
    public function __construct(
        RendererServiceInterface $renderer,
        UserRepositoryInterface $user_repository,
        UserServiceInterface $user_service
    ) {
        $this->renderer = $renderer;
        $this->user_repository = $user_repository;
        $this->user_service = $user_service;
    }

    /**
     * {@inheritDoc}
     */
    public function list(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\UserInterface $user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            $content = $this->renderer->render('error.twig', [
                'message' => 'You are not allowed to access this page',
            ]);

            return new Response(403, [], $content);
        }

        $users = $this->user_repository->getAll([], 'id DESC');

        $content = $this->renderer->render('admin/user/list.twig', [
            'users' => $users,
        ]);

        return new Response(200, [], $content);
    }

    /**
     * {@inheritDoc}
     */
    public function show(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\UserInterface $user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            $content = $this->renderer->render('error.twig', [
                'message' => 'You are not allowed to access this page',
            ]);

            return new Response(403, [], $content);
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];

        $user = $this->user_repository->getOne(['id' => $id]);
        if (!isset($user)) {
            $content = $this->renderer->render('error.twig', [
                'message' => "User #$id not found.",
            ]);

            return new Response(404, [], $content);
        }

        $content = $this->renderer->render('admin/user/show.twig', [
            'user' => $user,
        ]);

        return new Response(200, [], $content);
    }

    /**
     * {@inheritDoc}
     */
    public function createForm(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\UserInterface $user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            $content = $this->renderer->render('error.twig', [
                'message' => 'You are not allowed to access this page',
            ]);

            return new Response(403, [], $content);
        }

        // Restore form input from the session.
        $error = isset($_SESSION['error']) ? $_SESSION['error'] : '';
        $email = isset($_SESSION['email']) ? $_SESSION['email'] : '';
        $password = isset($_SESSION['password']) ? $_SESSION['password'] : '';
        $role = isset($_SESSION['role']) ? $_SESSION['role'] : '';

        unset($_SESSION['error']);
        unset($_SESSION['email']);
        unset($_SESSION['password']);
        unset($_SESSION['role']);

        $content = $this->renderer->render('admin/user/create.twig', [
            'error' => $error,
            'email' => $email,
            'password' => $password,
            'role' => $role,
        ]);

        return new Response(200, [], $content);
    }

    /**
     * {@inheritDoc}
     */
    public function create(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\UserInterface $user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            $content = $this->renderer->render('error.twig', [
                'message' => 'You are not allowed to access this page',
            ]);

            return new Response(403, [], $content);
        }

        $data = $request->getParsedBody();
        $email = isset($data['email']) ? $data['email'] : '';
        $password = isset($data['password']) ? $data['password'] : '';
        $role = isset($data['role']) ? (int)$data['role'] : '';

        if (empty($email)) {
            $_SESSION['error'] = 'Email should not be empty';
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            $_SESSION['role'] = $role;
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user/create']);
        }

        if (empty($password)) {
            $_SESSION['error'] = 'Password should not be empty';
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            $_SESSION['role'] = $role;
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user/create']);
        }

        try {
            $user = (new User(0, '', ''))->withEmail($email)->withPassword($password)->withRole($role);
            $this->user_repository->insert($user);
        }
        catch(\Exception $e) {
            $_SESSION['error'] = $e->getMessage();
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            $_SESSION['role'] = $role;
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user']);
        }

        return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user']);
    }

    /**
     * {@inheritDoc}
     */
    public function editForm(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\UserInterface $user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            $content = $this->renderer->render('error.twig', [
                'message' => 'You are not allowed to access this page',
            ]);

            return new Response(403, [], $content);
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];

        $user = $this->user_repository->getOne(['id' => $id]);
        if (!isset($user)) {
            $content = $this->renderer->render('error.twig', [
                'message' => "User #$id not found.",
            ]);

            return new Response(404, [], $content);
        }

        // Restore form input from the session.
        $error = isset($_SESSION['error']) ? $_SESSION['error'] : '';

        unset($_SESSION['error']);

        $content = $this->renderer->render('admin/user/edit.twig', [
            'error' => $error,
            'user' => $user,
        ]);

        return new Response(200, [], $content);
    }

    /**
     * {@inheritDoc}
     */
    public function edit(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\UserInterface $user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            $content = $this->renderer->render('error.twig', [
                'message' => 'You are not allowed to access this page',
            ]);

            return new Response(403, [], $content);
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];

        $user = $this->user_repository->getOne(['id' => $id]);
        if (!isset($user)) {
            $content = $this->renderer->render('error.twig', [
                'message' => "User #$id not found.",
            ]);

            return new Response(404, [], $content);
        }

        $data = $request->getParsedBody();
        $email = isset($data['email']) ? $data['email'] : '';
        $password = isset($data['password']) ? $data['password'] : '';
        $role = isset($data['role']) ? (int)$data['role'] : '';

        if (empty($email)) {
            $_SESSION['error'] = 'Email should not be empty';
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . "/admin/user/$id/edit"]);
        }

        try {
            $user = $user->withEmail($email)->withRole($role);
            if (!empty($password)) {
                $user = $user->withPassword($password);
            }

            $this->user_repository->update(['id' => $id], $user);
        }
        catch(\Exception $e) {
            $_SESSION['error'] = $e->getMessage();
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user']);
        }

        return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user']);
    }

    /**
     * {@inheritDoc}
     */
    public function deleteConfirm(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\UserInterface $user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            $content = $this->renderer->render('error.twig', [
                'message' => 'You are not allowed to access this page',
            ]);

            return new Response(403, [], $content);
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];

        $user = $this->user_repository->getOne(['id' => $id]);
        if (!isset($user)) {
            $content = $this->renderer->render('error.twig', [
                'message' => "User #$id not found.",
            ]);

            return new Response(404, [], $content);
        }

        $content = $this->renderer->render('confirm.twig', [
            'message' => 'Are you sure you want to delete the user <em><a href="mailto:' . $user->getEmail() . '">' . $user->getEmail() . '</a></em>?',
            'submit' => 'Yes',
            'cancel' => 'No',
            'submit_url' => "/admin/user/$id/delete/submit",
            'cancel_url' => '/admin/user',
            'method' => 'POST',
        ]);

        return new Response(200, [], $content);
    }

    /**
     * {@inheritDoc}
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\UserInterface $user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            $content = $this->renderer->render('error.twig', [
                'message' => 'You are not allowed to access this page',
            ]);

            return new Response(403, [], $content);
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];

        $user = $this->user_repository->getOne(['id' => $id]);
        if (!isset($user)) {
            $content = $this->renderer->render('error.twig', [
                'message' => "User #$id not found.",
            ]);

            return new Response(404, [], $content);
        }

        $this->user_repository->delete(['id' => $id]);

        return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user']);
    }
}
