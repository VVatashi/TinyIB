import { DOM } from '../utils';

const pointerEvents = 'PointerEvent' in window;
const touchEvents = 'ontouchstart' in window;

export class VideoPlayer {
  protected readonly $video: HTMLVideoElement;
  protected readonly $controls: HTMLElement;

  protected readonly $play: HTMLButtonElement;
  protected readonly $pause: HTMLButtonElement;

  protected readonly $seek: HTMLInputElement;
  protected readonly $volume: HTMLInputElement;

  protected readonly $mute: HTMLButtonElement;
  protected readonly $unmute: HTMLButtonElement;

  protected readonly $expand: HTMLButtonElement;
  protected readonly $compress: HTMLButtonElement;

  protected playing = true;
  protected fullscreen = false;

  constructor(readonly $player: Element, autoPlay: boolean = true) {
    const controls = [
      'video', 'controls',
      'play', 'pause',
      'seek', 'volume',
      'mute', 'unmute',
      'expand', 'compress',
    ];

    controls.forEach(control => {
      const controlClass = `.player__${control}`;
      const $control = DOM.qs(controlClass, $player) as HTMLElement;
      const property = `$${control}`;
      (this as any)[property] = $control;
    });

    const events = ['click'];
    if (pointerEvents) {
      events.push('pointerdown', 'pointermove', 'pointerup', 'pointercancel');
    } else {
      events.push('mousedown', 'mousemove', 'mouseup');

      if (touchEvents) {
        events.push('touchstart', 'touchmove', 'touchend', 'touchcancel');
      }
    }

    events.forEach(event => {
      this.$video.addEventListener(event, e => {
        if (this.fullscreen) {
          e.stopPropagation();
          e.stopImmediatePropagation();

          if (event === 'click') {
            e.preventDefault();

            this.setPlaying(!this.playing);

            return false;
          }
        }
      });

      this.$controls.addEventListener(event, e => {
        e.stopPropagation();
        e.stopImmediatePropagation();
      });
    });

    this.$play.addEventListener('click', e => {
      e.preventDefault();

      this.setPlaying(true);

      return false;
    });

    this.$pause.addEventListener('click', e => {
      e.preventDefault();

      this.setPlaying(false);

      return false;
    });

    const timeUpdate = (e: Event) => {
      const value = this.$video.currentTime / this.$video.duration;
      this.$seek.value = value.toString();
    };
    this.$video.addEventListener('timeupdate', timeUpdate);

    this.$seek.addEventListener('change', e => {
      const time = +this.$seek.value * this.$video.duration;

      if ((this.$video as any).fastSeek) {
        (this.$video as any).fastSeek(time);
      } else {
        this.$video.currentTime = time;
      }
    });

    this.$seek.addEventListener('mousedown', e => {
      if (this.playing) {
        this.$video.removeEventListener('timeupdate', timeUpdate);
      }
    });

    this.$seek.addEventListener('mouseup', e => {
      if (this.playing) {
        this.$video.addEventListener('timeupdate', timeUpdate);
      }
    });

    this.$mute.addEventListener('click', e => {
      e.preventDefault();

      this.setMute(true);

      return false;
    });

    this.$unmute.addEventListener('click', e => {
      e.preventDefault();

      this.setMute(false);

      return false;
    });

    const volumeChange = (e: Event) => {
      if (+this.$volume.value === 0) {
        this.$mute.classList.add('hidden');
        this.$unmute.classList.remove('hidden');
      } else {
        this.$mute.classList.remove('hidden');
        this.$unmute.classList.add('hidden');
      }

      this.$video.volume = +this.$volume.value;
    };

    this.$volume.addEventListener('input', volumeChange);
    this.$volume.addEventListener('change', volumeChange);

    this.$expand.addEventListener('click', e => {
      e.preventDefault();

      this.setFullscreen(true);

      return false;
    });

    this.$compress.addEventListener('click', e => {
      e.preventDefault();

      this.setFullscreen(false);

      return false;
    });

    document.addEventListener('fullscreenchange', e => {
      if (!(document as any).fullscreenElement) {
        this.$expand.classList.remove('hidden');
        this.$compress.classList.add('hidden');

        this.$player.classList.remove('player--fullscreen');

        this.fullscreen = false;
      }
    });

    this.setPlaying(autoPlay);
  }

  setPlaying(value: boolean) {
    if (value) {
      this.$video.play();

      this.$play.classList.add('hidden');
      this.$pause.classList.remove('hidden');

      this.playing = true;
    } else {
      this.$video.pause();

      this.$play.classList.remove('hidden');
      this.$pause.classList.add('hidden');

      this.playing = false;
    }
  }

  setMute(value: boolean) {
    if (value) {
      this.$mute.classList.add('hidden');
      this.$unmute.classList.remove('hidden');

      this.$video.volume = 0;
      this.$volume.value = '0';
    } else {
      this.$mute.classList.remove('hidden');
      this.$unmute.classList.add('hidden');

      this.$video.volume = 1;
      this.$volume.value = '1';
    }
  }

  setFullscreen(value: boolean) {
    if (value) {
      this.$player.requestFullscreen();

      this.$expand.classList.add('hidden');
      this.$compress.classList.remove('hidden');

      this.$player.classList.add('player--fullscreen');

      this.fullscreen = true;
    } else {
      document.exitFullscreen();

      this.$expand.classList.remove('hidden');
      this.$compress.classList.add('hidden');

      this.$player.classList.remove('player--fullscreen');

      this.fullscreen = false;
    }
  }
}
