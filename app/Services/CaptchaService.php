<?php

namespace Imageboard\Services;

class CaptchaService
{
  const WIDTH = 320;
  const HEIGHT = 80;

  const FONT_SIZE = 48;
  const LENGTH = 5;

  const OCTAVES = 5;

  const SESSION_KEY = 'captcha';

  /** @var ConfigService */
  private $config;

  /** @var SessionService */
  private $session;

  /**
   * @param ConfigService  $config
   * @param SessionService $session
   */
  public function __construct(
    ConfigService $config,
    SessionService $session
  ) {
    $this->config = $config;
    $this->session = $session;
  }

  private function generateText(): string
  {
    $text = '';
    $letters = ['A', 'W', 'V', 'O', 'O'];
    $count = count($letters);

    for ($i = 0; $i < static::LENGTH; ++$i) {
      $index = mt_rand(0, $count - 1);
      $text .= $letters[$index];
    }

    return $text;
  }

  private function storeText(string $text)
  {
    $this->session->set(static::SESSION_KEY, $text);
  }

  private function loadText(): ?string
  {
    return $this->session->get(static::SESSION_KEY);
  }

  private function resetText()
  {
    $this->session->delete(static::SESSION_KEY);
  }

  /**
   * @param string $text Captcha text.
   *
   * @return resource Captch image.
   */
  private function generateImage(string $text)
  {
    $image = imagecreatetruecolor(static::WIDTH, static::HEIGHT);
    $padding = 5;
    $textColor = imagecolorallocate($image, 220, 220, 220);
    $fontPath = __DIR__ . '/../../webroot/fonts/roboto_bold.ttf';

    imagettftext($image, static::FONT_SIZE, 0, $padding, static::HEIGHT - $padding, $textColor, $fontPath, $text);

    // Disturb image.
    $phases = [];
    for ($i = 0; $i < static::OCTAVES; ++$i) {
      $phases[] = mt_rand(0, static::WIDTH);
    }

    $scale = 0.5;

    for ($x = 0; $x < static::WIDTH; ++$x) {
      $y = 0;
      for ($i = 0; $i < static::OCTAVES; ++$i) {
        $n = 1 << $i;
        $y += $n * (sin($phases[$i] + $x * $scale / $n) + 1) / 2;
      }

      imagecopy($image, $image, $x, 0, $x, $y, 1, static::HEIGHT);
    }

    imagefilter($image, IMG_FILTER_NEGATE);

    return $image;
  }

  /**
   * Creates new captcha and stores it in the session. Returns captcha image.
   *
   * @return resource Captcha image.
   */
  public function createCaptcha()
  {
    $text = $this->generateText();
    $this->storeText($text);
    return $this->generateImage($text);
  }

  /**
   * Validates captcha response against the stored value.
   *
   * @param string $text
   *
   * @return bool
   */
  public function checkCaptcha(string $text): bool
  {
    if (empty($text)) {
      return false;
    }

    return mb_strtoupper($text) === mb_strtoupper($this->loadText());
  }

  /**
   * Reset captcha stored in the session.
   *
   * After reset checkCaptcha() always returns false, unless a new captcha created.
   */
  public function resetCaptcha()
  {
    $this->resetText();
  }
}
