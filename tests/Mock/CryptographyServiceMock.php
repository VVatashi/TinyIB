<?php

namespace TinyIB\Tests\Mock;

use TinyIB\Service\CryptographyServiceInterface;

class CryptographyServiceMock implements CryptographyServiceInterface
{
    /**
     * {@inheritDoc}
     */
    public function generateTripcode(string $password) : string
    {
        // Return unprocessed input.
        return $password;
    }

    /**
     * {@inheritDoc}
     */
    public function generateSecureTripcode(string $password, string $salt) : string
    {
        // Return unprocessed input.
        return $password;
    }
}