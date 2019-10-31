import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import PostFormWithStore from './post-form';

import { PostFormPosition } from '../post-form';
import { AppState, openPostForm } from '../store';

interface Props {
  readonly postFormPosition: PostFormPosition;

  readonly onOpenForm: () => void;
}

interface State { }

export class PostFormWrapper extends PureComponent<Props, State> {
  private readonly container = React.createRef<HTMLDivElement>();
  private readonly postFormWrapper: HTMLDivElement;

  public constructor(props: Props) {
    super(props);

    this.state = {};
    this.postFormWrapper = document.createElement('div');
    this.postFormWrapper.classList.add('post-form-wrapper', 'hidden');
  }

  private onReplyButtonClick = () => {
    this.props.onOpenForm();
  };

  public componentDidMount() {
    this.container.current.insertBefore(this.postFormWrapper, null);
  }

  public componentDidUpdate(prevProps: Props) {
    const formPosition = this.props.postFormPosition;
    if (formPosition !== prevProps.postFormPosition) {
      if (formPosition.position !== 'closed') {
        this.postFormWrapper.classList.remove('hidden');
      } else if (formPosition.position === 'closed') {
        this.postFormWrapper.classList.add('hidden');
      }

      if (formPosition.position === 'open') {
        this.container.current.insertBefore(this.postFormWrapper, null);
      } else if (formPosition.position === 'post') {
        const post = document.getElementById(`reply_${formPosition.postID}`);
        if (post) {
          post.parentNode.insertBefore(this.postFormWrapper, post.nextSibling);
        }
      }
    }
  }

  public componentWillUnmount() {
    this.postFormWrapper.remove();
  }

  public render() {
    let replyButton = null;
    if (this.props.postFormPosition.position === 'closed') {
      replyButton = (
        <button className="content__reply-button button" onClick={this.onReplyButtonClick}>
          {window.threadID ? 'Reply' : 'Create thread'}
        </button>
      );
    }

    const portal = ReactDOM.createPortal(<PostFormWithStore />, this.postFormWrapper);

    return (
      <div className="post-form-wrapper" ref={this.container}>
        {replyButton}
        {portal}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    postFormPosition: state.posts.postFormPosition,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onOpenForm: () => dispatch(openPostForm()),
  };
};

export const PostFormWrapperWithStore = connect(mapStateToProps, mapDispatchToProps)(PostFormWrapper);
export default PostFormWrapperWithStore;
