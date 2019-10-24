import React, { PureComponent } from 'react';

interface Props {
  readonly file: File;

  readonly onClick?: () => void;
  readonly onChange?: (value: File) => void;
}

interface State { }

export class Preview extends PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
    };
  }

  private onClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  public render() {
    return (
      <div className="post-form__preview"
        onClick={this.onClick}>
      </div>
    );
  }
}

export default Preview;
