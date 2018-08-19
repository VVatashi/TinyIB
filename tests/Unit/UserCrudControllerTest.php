<?php

namespace TinyIB\Tests\Unit;

use GuzzleHttp\Psr7\ServerRequest;
use PHPUnit\Framework\TestCase;
use Psr\Http\Message\ResponseInterface;
use TinyIB\AccessDeniedException;
use TinyIB\Controller\Admin\UserCrudController;
use TinyIB\Controller\Admin\UserCrudControllerInterface;
use TinyIB\Controller\AuthController;
use TinyIB\Controller\AuthControllerInterface;
use TinyIB\Model\User;
use TinyIB\NotFoundException;
use TinyIB\Service\UserService;
use TinyIB\Tests\Mock\RendererServiceMock;
use TinyIB\Tests\Mock\UserRepositoryMock;

final class UserCrudControllerTest extends TestCase
{
    /** @var \TinyIB\Controller\AuthControllerInterface $controller */
    protected $controller;

    public static function setUpBeforeClass()
    {
        global $_SESSION;

        if (!isset($_SESSION)) {
            $_SESSION = [];
        }
    }

    public function setUp() : void
    {
        $renderer = new RendererServiceMock();
        $repository = new UserRepositoryMock();

        // Create users for tests.
        $user = new User(1, 'admin@example.com', '', 2);
        $user = $user->withPassword('admin');
        $repository->insert($user);

        $user = new User(2, 'test@example.com', '', 1);
        $user = $user->withPassword('test');
        $repository->insert($user);

        $service = new UserService($repository);
        $this->controller = new UserCrudController($renderer, $repository, $service);
    }

    public function testCreateController() : void
    {
        $this->assertNotNull($this->controller);
        $this->assertInstanceOf(UserCrudControllerInterface::class, $this->controller);
        $this->assertInstanceOf(UserCrudController::class, $this->controller);
    }

    public function testList() : void
    {
        $request = new ServerRequest('GET', '/admin/user');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));

        $response = $this->controller->list($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function testListAsNotAdminShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user');
        $request = $request->withAttribute('user', new User(2, 'test@example.com', '', 1));

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->list($request);
    }

    public function testShow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/1');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));

        $response = $this->controller->show($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function testShowAsNotAdminShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/1');
        $request = $request->withAttribute('user', new User(2, 'test@example.com', '', 1));

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->show($request);
    }

    public function testShowNotExistsUserShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/3');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));

        $this->expectException(NotFoundException::class);
        $response = $this->controller->show($request);
    }

    public function testGetCreateForm() : void
    {
        $request = new ServerRequest('GET', '/admin/user/create');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));

        $response = $this->controller->createForm($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function testGetCreateFormAsNotAdminShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/create');
        $request = $request->withAttribute('user', new User(2, 'test@example.com', '', 1));

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->createForm($request);
    }

    public function testSubmitCreateForm() : void
    {
        $request = new ServerRequest('GET', '/admin/user/create/submit');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'test',
            'role' => 1,
        ]);

        $response = $this->controller->create($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        $this->assertFalse(isset($_SESSION['error']));

        // Should redirect to the user list.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function testSubmitCreateFormWithEmptyEmailShouldSetError() : void
    {
        $request = new ServerRequest('GET', '/admin/user/create/submit');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));
        $request = $request->withParsedBody([
            'email' => '',
            'password' => 'test',
            'role' => 1,
        ]);

        $response = $this->controller->create($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        $this->assertTrue(isset($_SESSION['error']));

        // Should redirect to the user list.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function testSubmitCreateFormWithEmptyPasswordShouldSetError() : void
    {
        $request = new ServerRequest('GET', '/admin/user/create/submit');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => '',
            'role' => 1,
        ]);

        $response = $this->controller->create($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        $this->assertTrue(isset($_SESSION['error']));

        // Should redirect to the user list.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function testSubmitCreateFormAsNotAdminShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/create/submit');
        $request = $request->withAttribute('user', new User(2, 'test@example.com', '', 1));
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'test',
            'role' => 1,
        ]);

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->create($request);
    }

    public function testGetEditForm() : void
    {
        $request = new ServerRequest('GET', '/admin/user/2/edit');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));

        $response = $this->controller->editForm($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function testGetEditFormAsNotAdminShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/2/edit');
        $request = $request->withAttribute('user', new User(2, 'test@example.com', '', 1));

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->editForm($request);
    }

    public function testGetEditFormForNotExistsUserShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/3/edit');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));

        $this->expectException(NotFoundException::class);
        $response = $this->controller->editForm($request);
    }

    public function testSubmitEditForm() : void
    {
        $request = new ServerRequest('GET', '/admin/user/2/edit/submit');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'test',
            'role' => 1,
        ]);

        $response = $this->controller->edit($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        $this->assertFalse(isset($_SESSION['error']));

        // Should redirect to the user list.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function testSubmitEditFormWithEmptyEmailShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/2/edit/submit');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));
        $request = $request->withParsedBody([
            'email' => '',
            'password' => 'test',
            'role' => 1,
        ]);

        $response = $this->controller->edit($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        $this->assertTrue(isset($_SESSION['error']));

        // Should redirect to the user list.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function testSubmitEditFormAsNotAdminShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/2/edit/submit');
        $request = $request->withAttribute('user', new User(2, 'test@example.com', '', 1));
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'test',
            'role' => 1,
        ]);

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->edit($request);
    }

    public function testSubmitEditFormForNotExistsUserShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/3/edit/submit');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'test',
            'role' => 1,
        ]);

        $this->expectException(NotFoundException::class);
        $response = $this->controller->edit($request);
    }

    public function testGetDeleteConfirmation() : void
    {
        $request = new ServerRequest('GET', '/admin/user/2/delete');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));

        $response = $this->controller->deleteConfirm($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function testGetDeleteConfirmationAsNotAdminShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/2/delete');
        $request = $request->withAttribute('user', new User(2, 'test@example.com', '', 1));

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->deleteConfirm($request);
    }

    public function testGetDeleteConfirmationForNotExistsUserShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/3/delete');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));

        $this->expectException(NotFoundException::class);
        $response = $this->controller->deleteConfirm($request);
    }

    public function testSubmitDelete() : void
    {
        $request = new ServerRequest('GET', '/admin/user/2/delete/submit');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));

        $response = $this->controller->delete($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Should redirect to the user list.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function testSubmitDeleteAsNotAdminShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/2/delete/submit');
        $request = $request->withAttribute('user', new User(2, 'test@example.com', '', 1));

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->delete($request);
    }

    public function testSubmitDeleteForNotExistsUserShouldThrow() : void
    {
        $request = new ServerRequest('GET', '/admin/user/3/delete/submit');
        $request = $request->withAttribute('user', new User(1, 'admin@example.com', '', 2));

        $this->expectException(NotFoundException::class);
        $response = $this->controller->delete($request);
    }
}
