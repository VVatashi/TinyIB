import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
  CheckboxWithStore as Checkbox,
  RadioWithStore as Radio,
} from '../controls';

import Settings from '../../../settings';
import { AppState, CustomNotify, setOption, setPostNotify, setReplyNotify } from '../../../store';

interface Props {
  readonly settings: Settings;
  readonly customPostNotify: CustomNotify;
  readonly customReplyNotify: CustomNotify;

  readonly onChange: (key: string, value: any) => void;
  readonly onPostNotifyChange: (name: string, file: string) => void;
  readonly onReplyNotifyChange: (name: string, file: string) => void;
}

interface State { }

export class Posts extends PureComponent<Props, State> {
  private enablePushNotifications = () => {
    if (!window.OneSignal) {
      return;
    }

    const oneSignal = window.OneSignal;
    oneSignal.push(() => {
      oneSignal.showNativePrompt();
    });
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

  public render() {
    let pushNotifications = null;
    if (window.OneSignal) {
      pushNotifications = (
        <>
          <h3 className="settings-form__option-title">Push notifications</h3>
          <button onClick={this.enablePushNotifications}>Enable push notifications</button>
          <p>Push notifications will not work if <a href="https://onesignal.com/" target="_blank">onesignal.com</a> is blocked or down</p>
        </>
      );
    }

    return (
      <>
        <Checkbox setting="post.enableThreadAutoupdate">Enable thread autoupdate</Checkbox>
        <Checkbox setting="post.disableWebSockets">Disable web sockets</Checkbox>
        <Checkbox setting="post.scrollToNewPosts">Scroll to new posts</Checkbox>
        <Checkbox setting="post.showSpoilers">Show spoilers</Checkbox>
        <Checkbox setting="post.disableSub">Disable subscript and superscript</Checkbox>

        <h3 className="settings-form__option-title">Reply icon position</h3>
        <Radio setting="post.reflinkIconPosition" value="header">In the post header</Radio>
        <Radio setting="post.reflinkIconPosition" value="post">In the right bottom corner</Radio>

        <h3 className="settings-form__option-title">Unread posts notify</h3>
        <Radio setting="post.unreadPostsNotify.mode" value="disable">Disable</Radio>
        <Radio setting="post.unreadPostsNotify.mode" value="once">Play once</Radio>
        <Radio setting="post.unreadPostsNotify.mode" value="every-post">Play on every new post</Radio>
        <Radio setting="post.unreadPostsNotify.mode" value="repeat">
          <span>Play every </span>
          <input type="number" min="1"
            className="input settings-form__text"
            value={this.props.settings.post.unreadPostsNotify.interval}
            onChange={e => this.props.onChange('post.unreadPostsNotify.interval', e.target.value)} />
          <span> seconds</span>
        </Radio>

        <h4 className="settings-form__option-title">Unread posts notify sound</h4>
        <Radio setting="post.unreadPostsNotify.type" value="default-1">Default 1</Radio>
        <Radio setting="post.unreadPostsNotify.type" value="default-2">Default 2</Radio>
        <Radio setting="post.unreadPostsNotify.type" value="custom">
          <span>Custom </span>
          <label>
            <span className="filename button">
              {this.props.customPostNotify.name || 'Click to select...'}
            </span>

            <input type="file" hidden
              onChange={e => this.changePostNotifyFile(e.target.files[0])} />
          </label>
        </Radio>

        <h3 className="settings-form__option-title">Unread replies notify</h3>
        <Radio setting="post.unreadRepliesNotify.mode" value="disable">Disable</Radio>
        <Radio setting="post.unreadRepliesNotify.mode" value="once">Play once</Radio>
        <Radio setting="post.unreadRepliesNotify.mode" value="every-post">Play on every new post</Radio>
        <Radio setting="post.unreadRepliesNotify.mode" value="repeat">
          <span>Play every </span>
          <input type="number" min="1"
            className="input settings-form__text"
            value={this.props.settings.post.unreadRepliesNotify.interval}
            onChange={e => this.props.onChange('post.unreadRepliesNotify.interval', e.target.value)} />
          <span> seconds</span>
        </Radio>

        <h4 className="settings-form__option-title">Unread replies notify sound</h4>
        <Radio setting="post.unreadRepliesNotify.type" value="default-1">Default 1</Radio>
        <Radio setting="post.unreadRepliesNotify.type" value="default-2">Default 2</Radio>
        <Radio setting="post.unreadRepliesNotify.type" value="custom">
          <span>Custom </span>
          <label>
            <span className="filename button">
              {this.props.customReplyNotify.name || 'Click to select...'}
            </span>

            <input type="file" hidden
              onChange={e => this.changeReplyNotifyFile(e.target.files[0])} />
          </label>
        </Radio>

        {pushNotifications}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    settings: state.settings.settings,
    customPostNotify: state.settings.customPostNotify,
    customReplyNotify: state.settings.customReplyNotify,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onChange: (key: string, value: any) => dispatch(setOption(key, value)),
    onPostNotifyChange: (name: string, file: string) => dispatch(setPostNotify(name, file)),
    onReplyNotifyChange: (name: string, file: string) => dispatch(setReplyNotify(name, file)),
  };
};

export const PostsWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

export default PostsWithStore;
