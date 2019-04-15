export class Keyboard {
  static checkKeyCode(e: KeyboardEvent, code: number) {
    return e.keyCode === code || e.which === code;
  }

  static checkKeyChar(e: KeyboardEvent, char: string) {
    return e.key === char || Keyboard.checkKeyCode(e, char.toUpperCase().charCodeAt(0));
  }
}
