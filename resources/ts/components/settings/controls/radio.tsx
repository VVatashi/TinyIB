import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Settings from '../../../settings';
import { AppState, setOption } from '../../../store';

interface Props {
  readonly checked: boolean;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly children: any;
}

interface State { }

export class Radio extends PureComponent<Props, State> {
  public render() {
    return (
      <div className="settings-form__row">
        <label className="settings-form__label">
          <input type="radio" className="settings-form__radio"
            value={this.props.value} checked={this.props.checked}
            onChange={e => this.props.onChange(e.target.value)} />
          {this.props.children}
        </label>
      </div>
    );
  }
}

interface OwnProps {
  readonly value: string;
  readonly setting: string;
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  return {
    checked: `${Settings.get(state.settings.settings, ownProps.setting)}` === ownProps.value,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => {
  return {
    onChange: (value: string) => dispatch(setOption(ownProps.setting, value)),
  };
};

export const RadioWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Radio);

export default RadioWithStore;
