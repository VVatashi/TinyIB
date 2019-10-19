import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Settings from './settings';

import { AppState } from '../store';

interface Props {
  readonly showPopup: boolean;
}

interface State { }

export class SettingsPopup extends PureComponent<Props, State> {
  public render() {
    const className = [
      'popup',
      'popup--settings',
      this.props.showPopup ? '' : 'hidden',
    ].join(' ');

    return (
      <div className={className}>
        <Settings />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    showPopup: state.settings.showPopup,
  };
};

export const SettingsPopupWithStore = connect(mapStateToProps)(SettingsPopup);
export default SettingsPopupWithStore;
