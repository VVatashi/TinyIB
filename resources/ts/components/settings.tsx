import { DateTime } from 'luxon';
import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import HotKeys from './hotkeys';
import { Settings as SettingsModel, PostAuthor, Replace } from '../settings';
import { AppState, setOption, setPostNotify, setReplyNotify, CustomNotify } from '../store';
import { Time } from '../utils';

const enum Tab {
  Filter = 'filter',
  Posts = 'posts',
  Images = 'images',
  Links = 'links',
  Form = 'form',
  Time = 'time',
  Common = 'common',
}

const tabTitles: { [key: string]: string; } = {
  [Tab.Filter]: 'Filter',
  [Tab.Posts]: 'Posts',
  [Tab.Images]: 'Images',
  [Tab.Links]: 'Links',
  [Tab.Form]: 'Form',
  [Tab.Time]: 'Time',
  [Tab.Common]: 'Common',
};

interface Props {
  readonly settings: SettingsModel;
  readonly customPostNotify: CustomNotify;
  readonly customReplyNotify: CustomNotify;
  readonly onChange: (key: string, value: any) => void;
  readonly onPostNotifyChange: (name: string, file: string) => void;
  readonly onReplyNotifyChange: (name: string, file: string) => void;
}

interface State {
  currentTab: Tab;
  currentTime: string;
}

export class Settings extends PureComponent<Props, State> {
  private interval: number;

  public constructor(props: Props) {
    super(props);

    this.state = {
      currentTab: Tab.Common,
      currentTime: '',
    };
  }

  public componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  private updateTime = () => {
    const time = DateTime.fromJSDate(new Date());
    this.setState({
      currentTime: Time.format(time),
    });
  }

  private setTab = (tab: Tab) => {
    this.setState({
      currentTab: tab,
    });
  };

  private renderTabHeader = (title: string, tab: Tab) => {
    const isCurrent = this.state.currentTab === tab;
    const className = [
      'settings-form__tab',
      isCurrent ? 'settings-form__tab--active' : '',
    ].join(' ');
    return (
      <li className={className} onClick={() => this.setTab(tab)}>
        {title}
      </li>
    );
  };

  private renderTabHeaders = () => {
    const tabs = Object.keys(tabTitles).map((tab: Tab) => {
      const title = tabTitles[tab];
      return this.renderTabHeader(title, tab);
    });

    return (
      <ul className="settings-form__tabs">
        {tabs}
      </ul>
    );
  };

  private renderCheckbox = (key: string, children: any) => {
    const value = SettingsModel.get(this.props.settings, key);
    return (
      <div className="settings-form__row">
        <label className="settings-form__label">
          <input type="checkbox" className="settings-form__checkbox"
            checked={value} onChange={e => this.props.onChange(key, e.target.checked)} />
          {children}
        </label>
      </div>
    );
  };

  private renderRadioButton = (key: string, value: string, children: any) => {
    const checked = `${SettingsModel.get(this.props.settings, key)}` === value;
    return (
      <div className="settings-form__row">
        <label className="settings-form__label">
          <input type="radio" className="settings-form__radio"
            value={value} checked={checked}
            onChange={e => this.props.onChange(key, e.target.value)} />
          {children}
        </label>
      </div>
    );
  };

  private addNewFilter = () => {
    const hidden = [...this.props.settings.filter.hiddenAuthors];
    hidden.push({ name: '', tripcode: '' });
    this.props.onChange('filter.hiddenAuthors', hidden);
  };

  private changeFilter = (index: number, value: PostAuthor) => {
    const hidden = [...this.props.settings.filter.hiddenAuthors];
    hidden[index] = value;
    this.props.onChange('filter.hiddenAuthors', hidden);
  };

  private removeFilter = (index: number) => {
    const hidden = [...this.props.settings.filter.hiddenAuthors];
    hidden.splice(index, 1);
    this.props.onChange('filter.hiddenAuthors', hidden);
  };

  private renderFilters = () => {
    const filters = this.props.settings.filter.hiddenAuthors.map((value, index) => {
      return (
        <li className="settings-form__list-item">
          <input type="text" className="input settings-form__text"
            placeholder="Name" value={value.name}
            onChange={e => this.changeFilter(index, { ...value, name: e.target.value })} />
          <input type="text" className="input settings-form__text"
            placeholder="!Tripcode" value={value.tripcode}
            onChange={e => this.changeFilter(index, { ...value, tripcode: e.target.value })} />
          <button className="button" onClick={() => this.removeFilter(index)}>Remove</button>
        </li>
      );
    });

    return (
      <>
        <ul className="settings-form__list">{filters}</ul>
        <button className="button" onClick={this.addNewFilter}>Add</button>
      </>
    );
  };

  private enablePushNotifications = () => {
    if (!window.OneSignal) {
      return;
    }

    const oneSignal = window.OneSignal;
    oneSignal.push(() => {
      oneSignal.showNativePrompt();
    });
  };

  private addNewReplace = () => {
    const replaces = [...this.props.settings.form.replaces];
    replaces.push({ pattern: '', replace: '' });
    this.props.onChange('form.replaces', replaces);
  };

  private changeReplace = (index: number, value: Replace) => {
    const replaces = [...this.props.settings.form.replaces];
    replaces[index] = value;
    this.props.onChange('form.replaces', replaces);
  };

  private removeReplace = (index: number) => {
    const replaces = [...this.props.settings.form.replaces];
    replaces.splice(index, 1);
    this.props.onChange('form.replaces', replaces);
  };

  private renderReplaces = () => {
    const replaces = this.props.settings.form.replaces.map((value, index) => {
      return (
        <li className="settings-form__list-item">
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
  };

  private changePostNotifyFile = (file: File) => {
    if (!file) {
      return;
    }

    const reader = new FileReader();
    const onLoad = () => {
      this.props.onPostNotifyChange(file.name, reader.result as string);
      reader.removeEventListener('load', onLoad);
    };

    reader.addEventListener('load', onLoad);
    reader.readAsDataURL(file);
  };

  private changeReplyNotifyFile = (file: File) => {
    if (!file) {
      return;
    }

    const reader = new FileReader();
    const onLoad = () => {
      this.props.onReplyNotifyChange(file.name, reader.result as string);
      reader.removeEventListener('load', onLoad);
    };

    reader.addEventListener('load', onLoad);
    reader.readAsDataURL(file);
  };

  private renderTab = () => {
    switch (this.state.currentTab) {
      case Tab.Filter:
        return (
          <div className="settings-form__tab-content">
            {this.renderCheckbox('filter.removeHiddenPosts', <span>Remove hidden posts</span>)}
            {this.renderCheckbox('filter.hideThreads', <span>Hide threads</span>)}

            <h3 className="settings-form__option-title">Hide posts by author</h3>
            {this.renderFilters()}
          </div>
        );

      case Tab.Posts:
        const unreadPostsInterval = (
          <>
            <span>Play every </span>
            <input type="number" min="1"
              className="input settings-form__text"
              value={this.props.settings.post.unreadPostsNotify.interval}
              onChange={e => this.props.onChange('post.unreadPostsNotify.interval', e.target.value)} />
            <span> seconds</span>
          </>
        );

        const unreadPostsFile = (
          <>
            <span>Custom </span>
            <label>
              <span className="filename button">
                {this.props.customPostNotify.name || 'Click to select...'}
              </span>

              <input type="file" hidden
                onChange={e => this.changePostNotifyFile(e.target.files[0])} />
            </label>
          </>
        );

        const unreadRepliesInterval = (
          <>
            <span>Play every </span>
            <input type="number" min="1"
              className="input settings-form__text"
              value={this.props.settings.post.unreadRepliesNotify.interval}
              onChange={e => this.props.onChange('post.unreadRepliesNotify.interval', e.target.value)} />
            <span> seconds</span>
          </>
        );

        const unreadRepliesFile = (
          <>
            <span>Custom </span>
            <label>
              <span className="filename button">
                {this.props.customReplyNotify.name || 'Click to select...'}
              </span>

              <input type="file" hidden
                onChange={e => this.changeReplyNotifyFile(e.target.files[0])} />
            </label>
          </>
        );

        let pushNotifications = null;
        if (window.OneSignal) {
          pushNotifications = (
            <>
              <h3 className="settings-form__option-title">Push notifications</h3>
              <button onClick={this.enablePushNotifications}>Enable push notifications</button>
              <p>May not work if <a href="https://onesignal.com/" target="_blank">onesignal.com</a> is blocked</p>
            </>
          );
        }

        return (
          <div className="settings-form__tab-content">
            {this.renderCheckbox('post.enableThreadAutoupdate', <span>Enable thread autoupdate</span>)}
            {this.renderCheckbox('post.disableWebSockets', <span>Disable web sockets</span>)}
            {this.renderCheckbox('post.scrollToNewPosts', <span>Scroll to new posts</span>)}
            {this.renderCheckbox('post.showSpoilers', <span>Show spoilers</span>)}
            {this.renderCheckbox('post.disableSub', <span>Disable subscript and superscript</span>)}

            <h3 className="settings-form__option-title">Reply icon position</h3>
            {this.renderRadioButton('post.reflinkIconPosition', 'header', <span>In the post header</span>)}
            {this.renderRadioButton('post.reflinkIconPosition', 'post', <span>In the right bottom corner</span>)}

            <h3 className="settings-form__option-title">Unread posts notify</h3>
            {this.renderRadioButton('post.unreadPostsNotify.mode', 'disable', <span>Disable</span>)}
            {this.renderRadioButton('post.unreadPostsNotify.mode', 'once', <span>Play once</span>)}
            {this.renderRadioButton('post.unreadPostsNotify.mode', 'every-post', <span>Play on every new post</span>)}
            {this.renderRadioButton('post.unreadPostsNotify.mode', 'repeat', unreadPostsInterval)}

            <h4 className="settings-form__option-title">Unread posts notify sound</h4>
            {this.renderRadioButton('post.unreadPostsNotify.type', 'default-1', <span>Default 1</span>)}
            {this.renderRadioButton('post.unreadPostsNotify.type', 'default-2', <span>Default 2</span>)}
            {this.renderRadioButton('post.unreadPostsNotify.type', 'custom', unreadPostsFile)}

            <h3 className="settings-form__option-title">Unread replies notify</h3>
            {this.renderRadioButton('post.unreadRepliesNotify.mode', 'disable', <span>Disable</span>)}
            {this.renderRadioButton('post.unreadRepliesNotify.mode', 'once', <span>Play once</span>)}
            {this.renderRadioButton('post.unreadRepliesNotify.mode', 'every-post', <span>Play on every new post</span>)}
            {this.renderRadioButton('post.unreadRepliesNotify.mode', 'repeat', unreadRepliesInterval)}

            <h4 className="settings-form__option-title">Unread replies notify sound</h4>
            {this.renderRadioButton('post.unreadRepliesNotify.type', 'default-1', <span>Default 1</span>)}
            {this.renderRadioButton('post.unreadRepliesNotify.type', 'default-2', <span>Default 2</span>)}
            {this.renderRadioButton('post.unreadRepliesNotify.type', 'custom', unreadRepliesFile)}

            {pushNotifications}
          </div>
        );

      case Tab.Images:
        return (
          <div className="settings-form__tab-content">
            {this.renderCheckbox('image.nsfw', <span>Enable NSFW mode</span>)}
            {this.renderCheckbox('image.showVideoOverlay', <span>Show video overlay</span>)}
            {this.renderCheckbox('image.hidePopupOnOutsideClick', <span>Close image popup when clicking outside</span>)}
            {this.renderCheckbox('image.autoPlay', <span>Autoplay audio & video files</span>)}
            {this.renderCheckbox('image.replaceThumbnail', <span>Replace image thumbnails with original</span>)}
            {this.renderCheckbox('image.replaceThumbnailGif', <span>Replace GIF thumbnails with original</span>)}
            {this.renderCheckbox('image.modalAtTop', <span>Show modal over controls</span>)}

            <h3 className="settings-form__option-title">Expand images</h3>
            {this.renderRadioButton('image.expandImages', 'tab', <span>In a new tab</span>)}
            {this.renderRadioButton('image.expandImages', 'post', <span>In post</span>)}
            {this.renderRadioButton('image.expandImages', 'popup', <span>In popup</span>)}
          </div>
        );

      case Tab.Links:
        return (
          <div className="settings-form__tab-content">
            {this.renderCheckbox('link.addNamesToLinks', <span>Add names to the links</span>)}
            {this.renderCheckbox('link.addYouToLinks', <span>Add '(you)' to the links</span>)}
            {this.renderCheckbox('link.showPostPopups', <span>Show post in a popup when hovering over a link</span>)}
          </div>
        );

      case Tab.Form:
        return (
          <div className="settings-form__tab-content">
            {this.renderCheckbox('form.saveSubject', <span>Save subject after posting</span>)}
            {this.renderCheckbox('form.saveName', <span>Save name after posting</span>)}
            {this.renderCheckbox('form.showMarkup', <span>Show markup buttons</span>)}
            {this.renderCheckbox('form.saveFormState', <span>Save form floating state on page reload</span>)}
            {this.renderCheckbox('form.insertTagsInPairs', <span>Insert tags in pairs</span>)}

            <h3 className="settings-form__option-title">Form Alignment</h3>
            {this.renderRadioButton('form.align', 'left', <span>On the left</span>)}
            {this.renderRadioButton('form.align', 'center', <span>In the center</span>)}

            <h3 className="settings-form__option-title">Preview Alignment</h3>
            {this.renderRadioButton('form.previewAlign', 'left', <span>On the left</span>)}
            {this.renderRadioButton('form.previewAlign', 'right', <span>On the right</span>)}

            <h3 className="settings-form__option-title">Replaces</h3>
            {this.renderReplaces()}
          </div>
        );

      case Tab.Time:
        const languageCustom = (
          <>
            <span>Custom </span>
            <input type="text" className="input settings-form__text" placeholder="en"
              value={this.props.settings.time.localeCustom}
              onChange={e => this.props.onChange('time.localeCustom', e.target.value)} />
          </>
        );

        const formatCustom = (
          <>
            <span>Custom </span>
            <input type="text" className="input settings-form__text" placeholder="EEE, dd MMM yyyy HH:mm:ss"
              value={this.props.settings.time.formatCustom}
              onChange={e => this.props.onChange('time.formatCustom', e.target.value)} />
            <p>See the <a href="https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens">luxon documentation</a> for the custom tokens reference.</p>
          </>
        );

        const timeZoneFixed = (
          <>
            <span>Fixed UTC offset </span>
            <input type="number" className="input settings-form__text" min="-99" max="99"
              value={this.props.settings.time.zoneFixed}
              onChange={e => this.props.onChange('time.zoneFixed', e.target.value)} />
          </>
        );

        return (
          <div className="settings-form__tab-content">
            <h3 className="settings-form__option-title">Language</h3>
            {this.renderRadioButton('time.locale', 'default', <span>Browser default</span>)}
            {this.renderRadioButton('time.locale', 'custom', languageCustom)}

            <h3 className="settings-form__option-title">Format</h3>
            {this.renderRadioButton('time.format', 'default', <span>Browser default</span>)}
            {this.renderRadioButton('time.format', 'custom', formatCustom)}

            <h3 className="settings-form__option-title">Time zone</h3>
            {this.renderRadioButton('time.zone', 'default', <span>Browser default</span>)}
            {this.renderRadioButton('time.zone', 'fixed', timeZoneFixed)}

            <h3 className="settings-form__option-title">Current format</h3>
            <p className="settings-form__row">{this.state.currentTime}</p>
          </div>
        );

      case Tab.Common:
        return (
          <div className="settings-form__tab-content">
            {this.renderCheckbox('common.smoothScroll', <span>Smooth scrolling</span>)}
            {this.renderCheckbox('common.showUnreadCountInTitle', <span>Show count of unread posts in title</span>)}

            <h3 className="settings-form__option-title">Thread Alignment</h3>
            {this.renderRadioButton('common.layout', 'left', <span>On the left</span>)}
            {this.renderRadioButton('common.layout', 'center', <span>In the center</span>)}

            <h3 className="settings-form__option-title">Hotkeys</h3>
            <HotKeys />
          </div>
        );

      default:
        return null;
    }
  };

  public render() {
    return (
      <div className="settings-form">
        {this.renderTabHeaders()}
        {this.renderTab()}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: {}) => {
  return {
    settings: state.settings.settings,
    customPostNotify: state.settings.customPostNotify,
    customReplyNotify: state.settings.customReplyNotify,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {}) => {
  return {
    onChange: (key: string, value: any) => dispatch(setOption(key, value)),
    onPostNotifyChange: (name: string, file: string) => dispatch(setPostNotify(name, file)),
    onReplyNotifyChange: (name: string, file: string) => dispatch(setReplyNotify(name, file)),
  };
};

const SettingsWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default SettingsWithStore;
