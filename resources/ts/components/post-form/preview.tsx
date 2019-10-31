import React, { PureComponent } from 'react';

interface Props {
  readonly file: File;

  readonly onClick?: () => void;
  readonly onChange?: (value: File) => void;
  readonly onDrop?: (data: DataTransfer) => void;
}

interface State {
  readonly previewSrc: string;
}

export class Preview extends PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      previewSrc: null,
    };
  }

  private updatePreview = () => {
    this.setState((state, props) => {
      if (state.previewSrc) {
        URL.revokeObjectURL(state.previewSrc);
      }

      return { previewSrc: props.file ? URL.createObjectURL(props.file) : null };
    });
  };

  private onClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  private onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (this.props.onDrop) {
      this.props.onDrop(e.dataTransfer);
    }
  };

  private onRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (this.props.onChange) {
      this.props.onChange(null);
    }
  };

  public componentDidMount() {
    this.updatePreview();
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.props.file !== prevProps.file) {
      this.updatePreview();
    }
  }

  public render() {
    const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];

    let title = null;
    let fileInfo = null;
    let previewContent = null;
    let removeButton = null;
    if (this.props.file) {
      const { name, size, type } = this.props.file;
      const sizePower = Math.floor(Math.log2(size) / 10);
      title = `${name}, ${(size / Math.pow(1024, sizePower)).toFixed(2)} ${FILE_SIZE_UNITS[sizePower]}`;

      fileInfo = (
        <span className="post-form__preview-info">{title}</span>
      );

      removeButton = (
        <span className="post-form__preview-remove fas fa-window-close" title="Remove file"
          onClick={this.onRemoveClick}></span>
      );

      if (type.startsWith('video/')) {
        previewContent = (
          <video className="post-form__preview-content" autoPlay loop muted>
            <source src={this.state.previewSrc} />
          </video>
        );
      } else if (type.startsWith('audio/')) {
        previewContent = (
          <img className="post-form__preview-content"
            src={`${window.baseUrl}/images/audio_thumbnail.png`}
            alt="Preview" />
        );
      } else {
        previewContent = (
          <img className="post-form__preview-content"
            src={this.state.previewSrc}
            alt="Preview" />
        );
      }
    } else {
      previewContent = (
        <span className="post-form__preview-label">Upload file</span>
      );
    }

    return (
      <div className="post-form__preview" title={title}
        onClick={this.onClick} onDrop={this.onDrop}
        onDragEnter={e => { e.preventDefault(); e.stopPropagation() }}
        onDragLeave={e => { e.preventDefault(); e.stopPropagation() }}
        onDragOver={e => { e.preventDefault(); e.stopPropagation() }}>
        {fileInfo}
        {previewContent}
        {removeButton}
      </div>
    );
  }
}

export default Preview;
