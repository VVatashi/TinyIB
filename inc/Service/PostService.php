<?php

namespace TinyIB\Service;

final class PostService implements PostServiceInterface
{
    /** @var CryptographyServiceInterface $cryptography_service */
    protected $cryptography_service;

    /**
     * Creates a new PostService instance.
     */
    public function __construct(CryptographyServiceInterface $cryptography_service)
    {
        $this->cryptography_service = $cryptography_service;
    }

    /**
     * {@inheritDoc}
     */
    public function processName(string $name) : array
    {
        $secure_tripcode = '';
        $secure_password_index = strpos($name, '##');
        if ($secure_password_index !== false) {
            // Split secure tripcode password from the name.
            $secure_password = substr($name, $secure_password_index + 2);
            $name = substr($name, 0, $secure_password_index);
            $salt = defined('TINYIB_TRIPSEED') ? TINYIB_TRIPSEED : '';
            $secure_tripcode = '!!' . $this->cryptography_service
                ->generateSecureTripcode($secure_password, $salt);
        }

        $tripcode = '';
        $password_index = strpos($name, '#');
        if ($password_index !== false) {
            // Split tripcode password from name.
            $password = substr($name, $password_index + 1);
            $name = substr($name, 0, $password_index);
            $tripcode = $this->cryptography_service->generateTripcode($password);
        }

        return [
            'name' => $name,
            'tripcode' => $tripcode . $secure_tripcode,
        ];
    }
}
