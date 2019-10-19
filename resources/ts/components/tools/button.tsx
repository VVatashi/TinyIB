import React, { PureComponent } from 'react';

interface Props {
  readonly title: string;
  readonly children: any;
  readonly active: boolean;
  readonly onClick: () => void;
}

interface State { }

export class Button extends PureComponent<Props, State> {
  public render() {
    const className = [
      'tools__button',
      this.props.active ? 'tools__button--active' : '',
      'button',
    ].join(' ');

    return (
      <li className="tools__item">
        <button className={className} title={this.props.title} onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </li>
    );
  }
}

export default Button;
