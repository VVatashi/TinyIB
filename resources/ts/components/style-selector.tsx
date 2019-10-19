import React, { PureComponent } from 'react';

import Style from '../style';

interface Props { }

interface State {
  readonly style: string;
}

export class StyleSelector extends PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      style: Style.get(),
    };
  }

  private setStyle = (style: string) => {
    this.setState({ style });
    Style.set(style);
  };

  public render() {
    const options = [...Style.list()].map(style => {
      return <option key={style} title={style}>{style}</option>;
    });

    return (
      <div className="style-selector">
        <select className="input" value={this.state.style} onChange={e => this.setStyle(e.target.value)}>
          <option disabled value="">Switch theme</option>
          {options}
        </select>
      </div>
    );
  }
}

export default StyleSelector;
