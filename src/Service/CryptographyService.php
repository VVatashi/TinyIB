<?php

namespace TinyIB\Service;

final class CryptographyService implements CryptographyServiceInterface
{
    /**
     * {@inheritDoc}
     */
    public function generateTripcode(string $password) : string
    {
        // Originally based on Futaba code. Probably.

        // Tripcode can be generated without the charset conversion
        // but in this case tripcodes generated from passwords with non-ASCII characters
        // will be different to the original implementation.
        if (function_exists('mb_convert_encoding')) {
            // Try convert tripcode password from UTF-8 to ShiftJIS.
            $recoded = mb_convert_encoding($password, 'SJIS', 'UTF-8');
            if (!empty($recoded)) {
                $password = $recoded;
            }
        }

        // Generate crypt salt.
        // Use the second and third characters of the password.
        // 'H..' concatenated to the password to ensure that there are enough characters.
        // In the original implementation there is just 'H.', which is probably bug.
        $salt = substr($password . 'H..', 1, 2);
        // Characters outside the ASCII range from '.' to 'z' should be replaced by dots.
        $salt = preg_replace('/[^\.-z]/', '.', $salt);
        // Replace the characters ':;<=>?@[\\]^_`' by characters 'ABCDEFGabcdef' respectively.
        $salt = strtr($salt, ':;<=>?@[\\]^_`', 'ABCDEFGabcdef');

        return substr(crypt($password, $salt), -10);
    }

    /**
     * {@inheritDoc}
     */
    public function generateSecureTripcode(string $password, string $salt) : string
    {
        // Use base64 of the md5 of the user password concatenated with the server salt.
        return substr(base64_encode(md5($password . $salt, true)), 2, 10);
    }
}
