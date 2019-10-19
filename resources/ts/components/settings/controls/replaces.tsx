import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Settings, { Replace } from '../../../settings';
import { AppState, setOption } from '../../../store';

interface Props {
  readonly settings: Settings;
  readonly onChange: (key: string, value: any) => void;
}

interface State { }

export class Replaces extends PureComponent<Props, State> {
  private addNewReplace = () => {
    const { settings } = this.props;
    const replaces = [...settings.form.replaces || []];
    replaces.push({ pattern: '', replace: '' });
    this.props.onChange('form.replaces', replaces);
  };

  private changeReplace = (index: number, value: Replace) => {
    const { settings } = this.props;
    const replaces = [...settings.form.replaces || []];
    replaces[index] = value;
    this.props.onChange('form.replaces', replaces);
  };

  private removeReplace = (index: number) => {
    const { settings } = this.props;
    const replaces = [...settings.form.replaces || []];
    replaces.splice(index, 1);
    this.props.onChange('form.replaces', replaces);
  };

  public render() {
    const { settings } = this.props;
    const replaces = (settings.form.replaces || []).map((value, index) => {
      return (
        <li key={index} className="settings-form__list-item">
          <input type="text" className="input settings-form__text"
            placeholder="Pattern" value={value.pattern}
            onChange={e => this.changeReplace(index, { ...value, pattern: e.target.value })} />
          <input type="text" className="input settings-form__text"
            placeholder="Replace" value={value.replace}
            onChange={e => this.changeReplace(index, { ...value, replace: e.target.value })} />
          <button className="button" onClick={() => this.removeReplace(index)}>Remove</button>
        </li>
      );
    });

    return (
      <>
        <ul className="settings-form__list">{replaces}</ul>
        <button className="button" onClick={this.addNewReplace}>Add</button>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    settings: state.settings.settings,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onChange: (key: string, value: any) => dispatch(setOption(key, value)),
  };
};

export const ReplacesWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Replaces);

export default ReplacesWithStore;
