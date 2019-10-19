import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Button from './button';

import Settings from '../../settings';
import { AppState, togglePopup, setOption } from '../../store';

interface Props {
  readonly showPopup: boolean;
  readonly settings: Settings;

  readonly onTogglePopup: () => void;
  readonly onChange: (key: string, value: any) => void;
}

interface State { }

export class Tools extends PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      settingsOpen: false,
    };
  }

  private toggleSettings = () => {
    this.props.onTogglePopup();
  };

  private toggleNsfw = () => {
    const { settings } = this.props;
    this.props.onChange('image.nsfw', !settings.image.nsfw);
  };

  private toggleAutoPlay = () => {
    const { settings } = this.props;
    this.props.onChange('image.autoPlay', !settings.image.autoPlay);
  };

  private scrollToTop = () => {
    window.location.hash = '';
    window.location.hash = 'header';
  };

  private scrollToBottom = () => {
    window.location.hash = '';
    window.location.hash = 'footer';
  };

  public render() {
    const { showPopup, settings } = this.props;

    return (
      <ul className="tools">
        <Button title="Settings" active={showPopup}
          onClick={this.toggleSettings}>
          <span className="fas fa-wrench"></span>
        </Button>

        <Button title="Toggle NSFW mode" active={settings.image.nsfw}
          onClick={this.toggleNsfw}>
          <span className="far fa-eye-slash"></span>
        </Button>

        <Button title="Toggle autoplay" active={settings.image.autoPlay}
          onClick={this.toggleAutoPlay}>
          <span className="fas fa-play"></span>
        </Button>

        <Button title="Scroll to top" active={false}
          onClick={this.scrollToTop}>
          <span className="fas fa-arrow-up"></span>
        </Button>

        <Button title="Scroll to bottom" active={false}
          onClick={this.scrollToBottom}>
          <span className="fas fa-arrow-down"></span>
        </Button>
      </ul>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    showPopup: state.settings.showPopup,
    settings: state.settings.settings,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onTogglePopup: () => dispatch(togglePopup()),
    onChange: (key: string, value: any) => dispatch(setOption(key, value)),
  };
};

export const ToolsWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tools);

export default ToolsWithStore;
