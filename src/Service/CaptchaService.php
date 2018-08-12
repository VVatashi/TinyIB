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
}
