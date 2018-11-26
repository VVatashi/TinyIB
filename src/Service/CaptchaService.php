<?php

namespace TinyIB\Service;

use TinyIB\SimpleCaptcha;

class CaptchaService extends SimpleCaptcha implements CaptchaServiceInterface
{
    /**
     * {@inheritDoc}
     */
    public function getText() : string
    {
        return $this->GetCaptchaText();
    }

    /**
     * {@inheritDoc}
     */
    public function getImage(string $text)
    {
        $ini = microtime(true);

        /** Initialization */
        $this->ImageAllocate();

        /** Text insertion */
        $text = $this->GetCaptchaText();
        $fontcfg = $this->fonts[array_rand($this->fonts)];
        $this->WriteText($text, $fontcfg);

        $_SESSION[$this->session_var] = $text;

        /** Transformations */
        if (!empty($this->lineWidth)) {
            $this->WriteLine();
        }
        $this->WaveImage();
        if ($this->blur && function_exists('imagefilter')) {
            imagefilter($this->im, IMG_FILTER_GAUSSIAN_BLUR);
        }
        $this->ReduceImage();

        return $this->im;
    }

    /**
     * {@inheritDoc}
     */
    public function checkCaptcha(string $captcha_response) : bool
    {
        if (!isset($_SESSION[$this->session_var])) {
            return true;
        }

        return strcasecmp($captcha_response, $_SESSION[$this->session_var]) === 0;
    }

    /**
     * {@inheritDoc}
     */
    public function checkRecaptcha(string $captcha_response) : bool
    {
        $data = [
            'secret' => TINYIB_RECAPTCHA_SECRET,
            'response' => $captcha_response,
        ];

        $options = [
            'http' => [
                'method' => 'POST',
                'header' => [
                    'Content-type: application/x-www-form-urlencoded',
                ],
                'content' => http_build_query($data),
            ],
            'ssl' => [
                'allow_self_signed' => true,
                'verify_peer' => false,
                'verify_peer_name' => false,
            ],
        ];

        $context = stream_context_create($options);
        $response = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
        $data = json_decode($response, true);
        if (!isset($data['success']) || $data['success'] !== true) {
            return false;
        }

        return isset($data['score']) && $data['score'] > TINYIB_RECAPTCHA_THRESHOLD;
    }
}
