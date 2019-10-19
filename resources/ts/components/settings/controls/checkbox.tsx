import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Settings from '../../../settings';
import { AppState, setOption } from '../../../store';

interface Props {
  readonly checked: boolean;
  readonly onChange: (checked: boolean) => void;
  readonly children: any;
}

interface State { }

export class Checkbox extends PureComponent<Props, State> {
  public render() {
    return (
      <div className="settings-form__row">
        <label className="settings-form__label">
          <input type="checkbox" className="settings-form__checkbox"
            checked={this.props.checked}
            onChange={e => this.props.onChange(e.target.checked)} />
          {this.props.children}
        </label>
      </div>
    );
  }
}

interface OwnProps {
  readonly setting: string;
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  return {
    checked: Settings.get(state.settings.settings, ownProps.setting),
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => {
  return {
    onChange: (checked: boolean) => dispatch(setOption(ownProps.setting, checked)),
  };
};

export const CheckboxWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkbox);

export default CheckboxWithStore;
