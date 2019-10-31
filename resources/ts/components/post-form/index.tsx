import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Markup from './markup';
import Preview from './preview';

import HotKeys from '../../hotkeys';
import { PostFormPosition } from '../../post-form';
import Settings from '../../settings';
import { AppState, closePostForm, makePostFormFloat, putPostFormAfterPost, openPostForm } from '../../store';

interface Props {
  readonly settings: Settings;
  readonly hotKeys: HotKeys;
  readonly postFormPosition: PostFormPosition;

  readonly onOpenForm: () => void;
  readonly onCloseForm: () => void;
  readonly onMakeFormFloat: (x: number, y: number) => void;
  readonly onPutFormAfterPost: (postID: number) => void;
}

interface State {
  readonly subject: string;
  readonly name: string;
  readonly message: string;
  readonly file: File;
}

export class PostForm extends PureComponent<Props, State> {
  private message = React.createRef<HTMLTextAreaElement>();
  private file = React.createRef<HTMLInputElement>();

  public constructor(props: Props) {
    super(props);

    this.state = {
      subject: '',
      name: '',
      message: '',
      file: null,
    };
  }

  private onClear = () => {
    this.setState({
      message: '',
    });
  };

  private onMakeFloating = () => {
    this.props.onMakeFormFloat(0, 0);
  };

  private onMoveToBottom = () => {
    this.props.onOpenForm();
  };

  private onClose = () => {
    this.props.onCloseForm();
  };

  private onSubmit = (e: Event) => {
    e.preventDefault();

    console.log('onSubmit');
  };

  private onInsertMarkup = (insertBefore: string, insertAfter: string) => {
    this.setState(state => {
      const element = this.message.current;
      let { message } = state;
      let { selectionStart, selectionEnd } = element;

      // Split message at the start and the end of the selection.
      const textBefore = message.substring(0, selectionStart);
      const textInside = message.substring(selectionStart, selectionEnd);
      const textAfter = message.substring(selectionEnd);

      // If user have a selected text or the 'insert tags in pairs' setting enabled,
      // wrap the selected text between tags and set cursor inside the tag pair.
      const wrap = selectionEnd > selectionStart || this.props.settings.form.insertTagsInPairs;
      if (wrap) {
        message = [textBefore, insertBefore, textInside, insertAfter, textAfter].join('');
        selectionStart += insertBefore.length;
        selectionEnd += insertBefore.length;
      } else {
        // If text already contains an unclosed tag, insert a closing tag.
        // Insert opening tag, otherwise.
        const haveOpenTag = textBefore.lastIndexOf(insertBefore) > textBefore.lastIndexOf(insertAfter);
        if (haveOpenTag) {
          message = [textBefore, insertAfter, textAfter].join('');
          selectionStart += insertAfter.length;
          selectionEnd += insertAfter.length;
        } else {
          message = [textBefore, insertBefore, textAfter].join('');
          selectionStart += insertBefore.length;
          selectionEnd += insertBefore.length;
        }
      }

      const { scrollTop } = element;
      setTimeout(() => {
        // Restore focus and update cursor position.
        element.focus();
        element.selectionStart = selectionStart;
        element.selectionEnd = selectionEnd;

        // Restore vertical scroll of the textarea in the Chrome,
        // because it scrolls to the top after changing the text.
        element.scrollTop = scrollTop;
      });

      return { message };
    });
  };

  private onInsertQuote = () => {
    console.log('onInsertQuote');
  };

  private onMessageKeyDown = (e: React.KeyboardEvent) => {
    if (HotKeys.check(this.props.hotKeys['send'], e.nativeEvent)) {
      this.onSubmit(e.nativeEvent);
    } else if (HotKeys.check({ code: 'KeyB', alt: true }, e.nativeEvent)) {
      e.preventDefault();
      this.onInsertMarkup('[b]', '[/b]');
    } else if (HotKeys.check({ code: 'KeyI', alt: true }, e.nativeEvent)) {
      e.preventDefault();
      this.onInsertMarkup('[i]', '[/i]');
    } else if (HotKeys.check({ code: 'KeyT', alt: true }, e.nativeEvent)) {
      e.preventDefault();
      this.onInsertMarkup('[s]', '[/s]');
    } else if (HotKeys.check({ code: 'KeyP', alt: true }, e.nativeEvent)) {
      e.preventDefault();
      this.onInsertMarkup('[spoiler]', '[/spoiler]');
    } else if (HotKeys.check({ code: 'KeyC', alt: true }, e.nativeEvent)) {
      e.preventDefault();
      this.onInsertMarkup('[code]', '[/code]');
    }
  };

  private onPreviewDrop = (data: DataTransfer) => {
    const file = data.files[0];
    if (file) {
      this.setState({ file });
    } else {
      // TODO: move this to a service.
      const text = data.getData('text');
      if (text && text.match(/https?:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,}\.[a-z]{2,}\b[-a-zA-Z0-9@:%_\+.~#?&\/=]*/)) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', text, true);
        xhr.responseType = 'blob';

        xhr.addEventListener('readystatechange', e => {
          if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
          }

          this.setState({ file: xhr.status < 400 ? xhr.response : null });
        });

        xhr.send();
      }
    }
  };

  public render() {
    const title = window.threadID ? `Reply to thread #${window.threadID}` : 'Create thread';
    const previewAlign = this.props.settings.form.previewAlign;
    const preview = (
      <div className="post-form__side">
        <Preview file={this.state.file}
          onClick={() => this.file.current.click()}
          onChange={file => this.setState({ file })}
          onDrop={this.onPreviewDrop} />
      </div>
    );

    let makeFloatButton = null;
    if (this.props.postFormPosition.position !== 'float') {
      makeFloatButton = (
        <span className="far fa-window-maximize" title="Floating form" onClick={this.onMakeFloating}></span>
      );
    }

    let moveToBottomButton = null;
    if (this.props.postFormPosition.position !== 'open') {
      moveToBottomButton = (
        <span className="fas fa-arrow-down" title="Move form to bottom" onClick={this.onMoveToBottom}></span>
      );
    }

    return (
      <div className="post-form">
        <div className="post-form__header">
          <span className="post-form__title">{title}</span>

          <div className="post-form__buttons">
            <span className="fas fa-ban" title="Clear form" onClick={this.onClear}></span>
            {makeFloatButton}
            {moveToBottomButton}
            <span className="far fa-window-close" title="Close form" onClick={this.onClose}></span>
          </div>
        </div>

        <form className="post-form__content" onSubmit={e => this.onSubmit(e.nativeEvent)}>
          {previewAlign === 'left' ? preview : null}

          <div className="post-form__main">
            <div className="post-form__author-row">
              <input className="post-form__subject input" type="text"
                name="subject" placeholder="Subject" title="Subject"
                value={this.state.subject}
                onChange={e => this.setState({ subject: e.target.value })} />

              <input className="post-form__name input" type="text"
                name="name" placeholder="Name" title="Name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })} />

              <button className="post-form__submit button" type="submit">Reply</button>
            </div>

            <div className="post-form__markup-row">
              <Markup onInsertMarkup={this.onInsertMarkup} onInsertQuote={this.onInsertQuote} />
            </div>

            <div className="post-form__message-row">
              <textarea className="post-form__message input"
                name="message" placeholder="Message" title="Message"
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
                onKeyDown={this.onMessageKeyDown}
                ref={this.message}></textarea>
            </div>
          </div>

          {previewAlign === 'right' ? preview : null}

          <input type="file" name="file" ref={this.file} hidden
            onChange={e => this.setState({ file: e.target.files[0] })} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    settings: state.settings.settings,
    hotKeys: state.settings.hotKeys,
    postFormPosition: state.posts.postFormPosition,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onOpenForm: () => dispatch(openPostForm()),
    onCloseForm: () => dispatch(closePostForm()),
    onMakeFormFloat: (x: number, y: number) => dispatch(makePostFormFloat(x, y)),
    onPutFormAfterPost: (postID: number) => dispatch(putPostFormAfterPost(postID)),
  };
};

export const PostFormWithStore = connect(mapStateToProps, mapDispatchToProps)(PostForm);
export default PostFormWithStore;
