<?php

namespace TinyIB\Tests\Unit;

use GuzzleHttp\Psr7\ServerRequest;
use PHPUnit\Framework\TestCase;
use Psr\Http\Message\ResponseInterface;
use TinyIB\AccessDeniedException;
use TinyIB\Controller\Admin\UserCrudController;
use TinyIB\Controller\Admin\UserCrudControllerInterface;
use TinyIB\Model\User;
use TinyIB\NotFoundException;
use TinyIB\Tests\Mock\RendererServiceMock;

final class UserCrudControllerTest extends TestCase
{
    /** @var \TinyIB\Controller\Admin\UserCrudControllerInterface $controller */
    protected $controller;

    public function setUp() : void
    {
        global $_SESSION;
        $_SESSION = [];

        User::where('email', 'admin@example.com')->forceDelete();
        User::where('email', 'user@example.com')->forceDelete();
        User::where('email', 'test@example.com')->forceDelete();
        User::where('email', 'another@example.com')->forceDelete();

        $admin = User::firstOrCreate([
            'email' => 'admin@example.com',
        ], [
            'password_hash' => '',
            'role' => 2,
        ]);
        $admin->setPassword('admin');
        $admin->save();

        $user = User::firstOrCreate([
            'email' => 'user@example.com',
        ], [
            'password_hash' => '',
        ]);
        $user->setPassword('user');
        $user->save();

        $test = User::firstOrCreate([
            'email' => 'test@example.com',
        ], [
            'password_hash' => '',
        ]);
        $test->setPassword('test');
        $test->save();

        $renderer = new RendererServiceMock();

        $this->controller = new UserCrudController($renderer);
    }

    public function test_сreateInstance() : void
    {
        $this->assertNotNull($this->controller);
        $this->assertInstanceOf(UserCrudControllerInterface::class, $this->controller);
        $this->assertInstanceOf(UserCrudController::class, $this->controller);
    }

    public function test_list_asAdmin_shouldReturnStatus200() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $request = new ServerRequest('GET', '/admin/user');
        $request = $request->withAttribute('user', $user);

        // Check response.
        $response = $this->controller->list($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Check status code.
        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function test_list_asUser_shouldThrowAccessDeniedException() : void
    {
        $user = User::where('email', 'test@example.com')->first();
        $request = new ServerRequest('GET', '/admin/user');
        $request = $request->withAttribute('user', $user);

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->list($request);
    }

    public function test_show_asAdmin_shouldReturnStatus200() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $target_id = User::where('email', 'test@example.com')->first()->id;
        $request = new ServerRequest('GET', "/admin/user/$target_id");
        $request = $request->withAttribute('user', $user);

        // Check response.
        $response = $this->controller->show($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Check status code.
        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function test_show_asUser_shouldThrowAccessDeniedException() : void
    {
        $user = User::where('email', 'user@example.com')->first();
        $target_id = User::where('email', 'test@example.com')->first()->id;
        $request = new ServerRequest('GET', "/admin/user/$target_id");
        $request = $request->withAttribute('user', $user);

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->show($request);
    }

    public function test_show_nonExistingUser_shouldThrowNotFoundException() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $target_id = 1000;
        $request = new ServerRequest('GET', "/admin/user/$target_id");
        $request = $request->withAttribute('user', $user);

        $this->expectException(NotFoundException::class);
        $response = $this->controller->show($request);
    }

    public function test_createForm_asAdmin_shouldReturnStatus200() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $request = new ServerRequest('GET', '/admin/user/create');
        $request = $request->withAttribute('user', $user);

        // Check response.
        $response = $this->controller->createForm($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Check status code.
        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function test_createForm_asUser_shouldThrowAccessDeniedException() : void
    {
        $user = User::where('email', 'user@example.com')->first();
        $request = new ServerRequest('GET', '/admin/user/create');
        $request = $request->withAttribute('user', $user);

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->createForm($request);
    }

    public function test_create_asAdmin_shouldRedirect() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $request = new ServerRequest('GET', '/admin/user/create/submit');
        $request = $request->withAttribute('user', $user);
        $request = $request->withParsedBody([
            'email' => 'another@example.com',
            'password' => 'another',
            'role' => 1,
        ]);

        // Check response.
        $response = $this->controller->create($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Shound not set error.
        $this->assertFalse(isset($_SESSION['error']));

        // Should set redirect to the user list.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function test_create_withEmptyEmail_shouldSetErrorAndRedirect() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $request = new ServerRequest('GET', '/admin/user/create/submit');
        $request = $request->withAttribute('user', $user);
        $request = $request->withParsedBody([
            'email' => '',
            'password' => 'another',
            'role' => 1,
        ]);

        // Check response.
        $response = $this->controller->create($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Shound set error.
        $this->assertTrue(isset($_SESSION['error']));

        // Should set redirect to the user list.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function test_create_withEmptyPassword_shouldSetErrorAndRedirect() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $request = new ServerRequest('GET', '/admin/user/create/submit');
        $request = $request->withAttribute('user', $user);
        $request = $request->withParsedBody([
            'email' => 'another@example.com',
            'password' => '',
            'role' => 1,
        ]);

        // Check response.
        $response = $this->controller->create($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Shound set error.
        $this->assertTrue(isset($_SESSION['error']));

        // Should redirect to the user list.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function test_create_asUser_shouldThrowAccessDeniedException() : void
    {
        $user = User::where('email', 'user@example.com')->first();
        $request = new ServerRequest('GET', '/admin/user/create/submit');
        $request = $request->withAttribute('user', $user);
        $request = $request->withParsedBody([
            'email' => 'another@example.com',
            'password' => 'another',
            'role' => 1,
        ]);

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->create($request);
    }

    public function test_editForm_asAdmin_shouldReturnStatus200() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $target_id = User::where('email', 'test@example.com')->first()->id;
        $request = new ServerRequest('GET', "/admin/user/$target_id/edit/submit");
        $request = $request->withAttribute('user', $user);

        // Check response.
        $response = $this->controller->editForm($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Check status code.
        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function test_editForm_asUser_shouldThrowAccessDeniedException() : void
    {
        $user = User::where('email', 'user@example.com')->first();
        $target_id = User::where('email', 'test@example.com')->first()->id;
        $request = new ServerRequest('GET', "/admin/user/$target_id/edit/submit");
        $request = $request->withAttribute('user', $user);

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->editForm($request);
    }

    public function test_editForm_nonExistingUser_shouldThrowNotFoundException() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $target_id = 1000;
        $request = new ServerRequest('GET', "/admin/user/$target_id/edit/submit");
        $request = $request->withAttribute('user', $user);

        $this->expectException(NotFoundException::class);
        $response = $this->controller->editForm($request);
    }

    public function test_edit_asAdmin_shouldRedirect() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $target_id = User::where('email', 'test@example.com')->first()->id;
        $request = new ServerRequest('GET', "/admin/user/$target_id/edit/submit");
        $request = $request->withAttribute('user', $user);
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'test',
            'role' => 1,
        ]);

        // Check response.
        $response = $this->controller->edit($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Shound not set error.
        $this->assertFalse(isset($_SESSION['error']));

        // Should set redirect to the user list.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function test_edit_withEmptyEmail_shouldSetErrorAndRedirect() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $target_id = User::where('email', 'test@example.com')->first()->id;
        $request = new ServerRequest('GET', "/admin/user/$target_id/edit/submit");
        $request = $request->withAttribute('user', $user);
        $request = $request->withParsedBody([
            'email' => '',
            'password' => 'test',
            'role' => 1,
        ]);

        // Check response.
        $response = $this->controller->edit($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Shound set error.
        $this->assertTrue(isset($_SESSION['error']));

        // Should redirect to the user list.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function test_edit_asUser_shouldThrowAccessDeniedException() : void
    {
        $user = User::where('email', 'user@example.com')->first();
        $target_id = User::where('email', 'test@example.com')->first()->id;
        $request = new ServerRequest('GET', "/admin/user/$target_id/edit/submit");
        $request = $request->withAttribute('user', $user);
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'test',
            'role' => 1,
        ]);

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->edit($request);
    }

    public function test_edit_nonExistingUser_shouldThrowNotFoundException() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $target_id = 1000;
        $request = new ServerRequest('GET', "/admin/user/$target_id/edit/submit");
        $request = $request->withAttribute('user', $user);
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'test',
            'role' => 1,
        ]);

        $this->expectException(NotFoundException::class);
        $response = $this->controller->edit($request);
    }

    public function test_deleteConfirm_asAdmin_shouldReturnStatus200() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $target_id = User::where('email', 'test@example.com')->first()->id;
        $request = new ServerRequest('GET', "/admin/user/$target_id/delete");
        $request = $request->withAttribute('user', $user);

        // Check response.
        $response = $this->controller->deleteConfirm($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Check status code.
        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function test_deleteConfirm_asUser_shouldThrowAccessDeniedException() : void
    {
        $user = User::where('email', 'user@example.com')->first();
        $target_id = User::where('email', 'test@example.com')->first()->id;
        $request = new ServerRequest('GET', "/admin/user/$target_id/delete");
        $request = $request->withAttribute('user', $user);

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->deleteConfirm($request);
    }

    public function test_deleteConfirm_nonExistingUser_shouldThrowNotFoundException() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $target_id = 1000;
        $request = new ServerRequest('GET', "/admin/user/$target_id/delete");
        $request = $request->withAttribute('user', $user);

        $this->expectException(NotFoundException::class);
        $response = $this->controller->deleteConfirm($request);
    }

    public function test_delete_asAdmin_shouldRedirect() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $target_id = User::where('email', 'test@example.com')->first()->id;
        $request = new ServerRequest('GET', "/admin/user/$target_id/delete/submit");
        $request = $request->withAttribute('user', $user);

        // Check response.
        $response = $this->controller->delete($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Should set redirect to the user list.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function test_delete_asUser_shouldThrowAccessDeniedException() : void
    {
        $user = User::where('email', 'user@example.com')->first();
        $target_id = User::where('email', 'test@example.com')->first()->id;
        $request = new ServerRequest('GET', "/admin/user/$target_id/delete/submit");
        $request = $request->withAttribute('user', $user);

        $this->expectException(AccessDeniedException::class);
        $response = $this->controller->delete($request);
    }

    public function testSubmitDeleteForNotExistsUserShouldThrow() : void
    {
        $user = User::where('email', 'admin@example.com')->first();
        $target_id = 1000;
        $request = new ServerRequest('GET', "/admin/user/$target_id/delete/submit");
        $request = $request->withAttribute('user', $user);

        $this->expectException(NotFoundException::class);
        $response = $this->controller->delete($request);
    }
}
