<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Model\Ban;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class BanController extends CrudController implements BanControllerInterface
{
    /**
     * {@inheritDoc}
     */
    public function list(ServerRequestInterface $request) : string
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $session_key = 'forms.admin_bans';
        if (!empty($_SESSION["$session_key.messages"])) {
            $messages = $_SESSION["$session_key.messages"];
            $_SESSION["$session_key.messages"] = [];
        } else {
            $messages = [];
        }

        $items = Ban::orderBy('id', 'desc')->get();
        return $this->renderer->render('admin/bans/list.twig', [
            'messages' => $messages,
            'items' => $items,
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function createForm(ServerRequestInterface $request) : ResponseInterface
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $session_key = 'forms.admin_bans_create';
        if (!empty($_SESSION["$session_key.messages"])) {
            $messages = $_SESSION["$session_key.messages"];
            $_SESSION["$session_key.messages"] = [];
        } else {
            $messages = [];
        }

        if (!empty($_SESSION["$session_key.fields"])) {
            $fields = $_SESSION["$session_key.fields"];
            $_SESSION["$session_key.fields"] = [];
        } else {
            $fields = [
                'ip' => '',
                'expires_at' => 60 * 60,
                'reason' => '',
            ];
        }

        $content = $this->renderer->render('admin/bans/form.twig', [
            'messages' => $messages,
            'fields' => $fields,
        ]);
        return new Response(200, [], $content);
    }

    /**
     * {@inheritDoc}
     */
    public function create(ServerRequestInterface $request) : ResponseInterface
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $data = $request->getParsedBody();

        $ip = isset($data['ip']) ? $data['ip'] : '';
        $expires_in = isset($data['expires_in']) ? (int)$data['expires_in'] : 0;
        $reason = isset($data['reason']) ? $data['reason'] : '';

        $session_key = 'forms.admin_bans_create';
        if (empty($ip)) {
            $_SESSION["$session_key.messages"][] = [
                'type' => 'error',
                'text' => 'IP is required.',
            ];

            $_SESSION["$session_key.fields"][] = [
                'ip' => $ip,
                'expires_in' => $expires_in,
                'reason' => $reason,
            ];

            return new Response(302, [
                'Location' => TINYIB_BASE_URL . TINYIB_BOARD . "/admin/bans/create",
            ]);
        }

        try {
            Ban::create([
                'ip' => $ip,
                'expires_at' => $expires_in !== 0 ? $expires_in + time() : 0,
                'reason' => $reason,
            ]);
        } catch (\Exception $exception) {
            $_SESSION["$session_key.messages"][] = [
                'type' => 'error',
                'text' => $exception->getMessage(),
            ];

            $_SESSION["$session_key.fields"][] = [
                'ip' => $ip,
                'expires_in' => $expires_in,
                'reason' => $reason,
            ];

            return new Response(302, [
                'Location' => TINYIB_BASE_URL . TINYIB_BOARD . "/admin/bans/create",
            ]);
        }

        return new Response(302, [
            'Location' => TINYIB_BASE_URL . TINYIB_BOARD . "/admin/bans",
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function delete(ServerRequestInterface $request, array $args) : ResponseInterface
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $data = $request->getParsedBody();
        $id = isset($data['id']) ? $data['id'] : '';

        $ban = Ban::find($id);
        if ($ban) {
            $ban->delete();
        } else {
            $_SESSION['forms.admin_bans.messages'][] = [
                'type' => 'error',
                'text' => "Ban #$id was not found.",
            ];
        }

        return new Response(302, [
            'Location' => TINYIB_BASE_URL . TINYIB_BOARD . "/admin/bans",
        ]);
    }
}
