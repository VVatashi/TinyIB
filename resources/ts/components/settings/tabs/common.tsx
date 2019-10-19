import React, { PureComponent } from 'react';

import {
  CheckboxWithStore as Checkbox,
  RadioWithStore as Radio,
  HotKeysWithStore as HotKeys,
} from '../controls';

interface Props { }

interface State { }

export class Common extends PureComponent<Props, State> {
  public render() {
    return (
      <>
        <Checkbox setting="common.smoothScroll">Smooth scrolling</Checkbox>
        <Checkbox setting="common.showUnreadCountInTitle">Show count of unread posts in title</Checkbox>

        <h3 className="settings-form__option-title">Thread Alignment</h3>
        <Radio setting="common.layout" value="left">On the left</Radio>
        <Radio setting="common.layout" value="center">In the center</Radio>

        <h3 className="settings-form__option-title">Hotkeys</h3>
        <HotKeys />
      </>
    );
  }
}

export default Common;
