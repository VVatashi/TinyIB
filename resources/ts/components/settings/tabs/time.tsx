import { DateTime } from 'luxon';
import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RadioWithStore as Radio } from '../controls';

import Settings from '../../../settings';
import { AppState, setOption } from '../../../store';
import { Time as TimeUtils } from '../../../utils';

interface Props {
  readonly settings: Settings;
  readonly onChange: (key: string, value: any) => void;
}

interface State {
  readonly currentTime: string;
}

export class Time extends PureComponent<Props, State> {
  private interval: number;

  public constructor(props: Props) {
    super(props);

    this.state = {
      currentTime: '',
    };
  }

  private updateTime = () => {
    const time = DateTime.fromJSDate(new Date());
    this.setState({
      currentTime: TimeUtils.format(time),
    });
  }

  public componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    return (
      <>
        <h3 className="settings-form__option-title">Language</h3>
        <Radio setting="time.locale" value="default">Browser default</Radio>
        <Radio setting="time.locale" value="custom">
          <span>Custom </span>
          <input type="text" className="input settings-form__text" placeholder="en"
            value={this.props.settings.time.localeCustom}
            onChange={e => this.props.onChange('time.localeCustom', e.target.value)} />
        </Radio>

        <h3 className="settings-form__option-title">Format</h3>
        <Radio setting="time.format" value="default">Browser default</Radio>
        <Radio setting="time.format" value="custom">
          <span>Custom </span>
          <input type="text" className="input settings-form__text" placeholder="EEE, dd MMM yyyy HH:mm:ss"
            value={this.props.settings.time.formatCustom}
            onChange={e => this.props.onChange('time.formatCustom', e.target.value)} />
          <p>See the <a href="https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens">luxon documentation</a> for the custom tokens reference.</p>
        </Radio>

        <h3 className="settings-form__option-title">Time zone</h3>
        <Radio setting="time.zone" value="default">Browser default</Radio>
        <Radio setting="time.zone" value="fixed">
          <span>Fixed UTC offset </span>
          <input type="number" className="input settings-form__text" min="-99" max="99"
            value={this.props.settings.time.zoneFixed}
            onChange={e => this.props.onChange('time.zoneFixed', e.target.value)} />
        </Radio>

        <h3 className="settings-form__option-title">Current format</h3>
        <p className="settings-form__row">{this.state.currentTime}</p>
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

export const TimeWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Time);

export default TimeWithStore;
