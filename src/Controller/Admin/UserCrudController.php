<?php

namespace TinyIB\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\AccessDeniedException;
use TinyIB\Model\User;
use TinyIB\NotFoundException;
use TinyIB\Service\RendererServiceInterface;

class UserCrudController implements UserCrudControllerInterface
{
    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    /**
     * Creates a new AuthController instance.
     *
     * @param RendererServiceInterface $renderer
     */
    public function __construct(
        RendererServiceInterface $renderer
    ) {
        $this->renderer = $renderer;
    }

    /**
     * {@inheritDoc}
     */
    public function list(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\User $current_user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $users = User::orderBy('id', 'desc')->get();
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
        /** @var \TinyIB\Model\User $current_user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];
        $user = User::find($id);
        if (!isset($user)) {
            throw new NotFoundException("User #$id not found.");
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
        /** @var \TinyIB\Model\User $current_user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
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
        /** @var \TinyIB\Model\User $current_user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $data = $request->getParsedBody();
        $email = isset($data['email']) ? $data['email'] : '';
        $password = isset($data['password']) ? $data['password'] : '';
        $role = isset($data['role']) ? (int)$data['role'] : 0;

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
            $user = User::where('email', $email)->first();
            if (isset($user)) {
                $_SESSION['error'] = "User $email is already exists";
                $_SESSION['email'] = $email;
                $_SESSION['password'] = $password;
                $_SESSION['role'] = $role;
                return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user/create']);
            }

            $user = User::onlyTrashed()->where('email', $email)->forceDelete();

            $user = new User([
                'email' => $email,
                'role' => $role,
            ]);
            $user->setPassword($password);
            $user->save();
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
        /** @var \TinyIB\Model\User $current_user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];
        $user = User::find($id);
        if (!isset($user)) {
            throw new NotFoundException("User #$id not found.");
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
        /** @var \TinyIB\Model\User $current_user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];
        $user = User::find($id);
        if (!isset($user)) {
            throw new NotFoundException("User #$id not found.");
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
            $user->email = $email;
            $user->role = $role;

            if (!empty($password)) {
                $user->setPassword($password);
            }

            $user->save();
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
        /** @var \TinyIB\Model\User $current_user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];

        $user = User::find($id);
        if (!isset($user)) {
            throw new NotFoundException("User #$id not found.");
        }

        $content = $this->renderer->render('confirm.twig', [
            'message' => 'Are you sure you want to delete the user <em><a href="mailto:' . $user->email . '">' . $user->email . '</a></em>?',
            'submit' => 'Yes',
            'cancel' => 'No',
            'submit_url' => "admin/user/$id/delete/submit",
            'cancel_url' => 'admin/user',
            'method' => 'POST',
        ]);

        return new Response(200, [], $content);
    }

    /**
     * {@inheritDoc}
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\User $current_user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];

        $user = User::find($id);
        if (!isset($user)) {
            throw new NotFoundException("User #$id not found.");
        }

        $user->delete();

        return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user']);
    }
}
