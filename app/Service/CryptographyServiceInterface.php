<?php

namespace Imageboard\Service;

interface CryptographyServiceInterface
{
    /**
     * Generates tripcode.
     *
     * @param string $password
     *   Tripcode password.
     *
     * @return string
     *   Generated tripcode.
     */
    function generateTripcode(string $password) : string;

    /**
     * Generates secure tripcode.
     *
     * @param string $password
     *   Secure tripcode password.
     *
     * @param string $salt
     *   Secure tripcode salt.
     *
     * @return string
     *   Generated secure tripcode.
     */
    function generateSecureTripcode(string $password, string $salt) : string;
}
