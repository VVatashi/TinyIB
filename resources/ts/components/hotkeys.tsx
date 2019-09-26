import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { HotKeys as HotKeysData, HotKey } from '../hotkeys';
import { AppState, setHotKey } from '../store';

interface HotKeyLabels {
  readonly [key: string]: string;
}

const hotKeys: HotKeyLabels = {
  closeMedia: 'Close file modal',
  previousMedia: 'Previous file',
  nextMedia: 'Next file',
  previousPost: 'Previous post',
  nextPost: 'Next post',
  toggleHide: 'Toggle post hide',
  toggleFile: 'Toggle file modal',
  toggleSettings: 'Toggle settings popup',
  toggleNSFW: 'Toggle NSFW mode',
  updateThread: 'Update thread',
  reply: 'Open reply form',
  send: 'Submit reply form',
};

const specialKeys = [
  'ControlLeft',
  'AltLeft',
  'ShiftLeft',
  'ControlRight',
  'AltRight',
  'ShiftRight',
];

interface Props {
  readonly hotKeys: HotKeysData;
  readonly setHotKey: (actionName: string, hotKey: HotKey) => void;
}

interface State { }

export class HotKeys extends PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {};
  }

  private formatHotkey = (hotKey: HotKey): string => {
    let key = hotKey.code;

    // Remove the 'Key' prefix.
    if (key.substr(0, 3) === 'Key') {
      key = key.substr(3);
    }

    // Add modifiers.

    if (hotKey.shift) {
      key = `Shift+${key}`;
    }

    if (hotKey.alt) {
      key = `Alt+${key}`;
    }

    if (hotKey.ctrl) {
      key = `Ctrl+${key}`;
    }

    return key;
  }

  private eventToHotKey = (event: React.KeyboardEvent): HotKey => {
    return {
      code: event.nativeEvent.code,
      ctrl: event.ctrlKey,
      alt: event.altKey,
      shift: event.shiftKey,
    };
  }

  private onKeyDown = (hotKeyName: string, event: React.KeyboardEvent) => {
    const { code } = event.nativeEvent;
    if (specialKeys.indexOf(code) !== -1) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const hotKey = this.eventToHotKey(event);
    this.props.setHotKey(hotKeyName, hotKey);
  }

  private renderHotKey = (hotKeyName: string, label: string) => {
    const hotKey = this.props.hotKeys[hotKeyName];
    const onKeyDown = (e: React.KeyboardEvent) => this.onKeyDown(hotKeyName, e);
    return (
      <div className="settings-form__row" key={hotKeyName}>
        <label className="settings-form__label">
          <span>{label} </span>
          <input type="text" className="input settings-form__text"
            value={this.formatHotkey(hotKey)}
            onKeyDown={onKeyDown} />
        </label>
      </div>
    );
  }

  public render() {
    const inputs = Object.keys(hotKeys).map(hotKeyName => {
      const label = hotKeys[hotKeyName];
      return this.renderHotKey(hotKeyName, label);
    });

    return (
      <div className="settings-form__hotkeys">
        <h3 className="settings-form__option-title">Hotkeys</h3>
        {inputs}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: {}) => {
  return {
    hotKeys: state.hotKeys.hotKeys,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {}) => {
  return {
    setHotKey: (actionName: string, hotKey: HotKey) => dispatch(setHotKey(actionName, hotKey)),
  };
};

const HotKeysWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(HotKeys);

export default HotKeysWithStore;
