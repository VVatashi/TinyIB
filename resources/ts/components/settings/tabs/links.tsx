import React, { PureComponent } from 'react';

import { CheckboxWithStore as Checkbox } from '../controls';

interface Props { }

interface State { }

export class Links extends PureComponent<Props, State> {
  public render() {
    return (
      <>
        <Checkbox setting="link.addNamesToLinks">Add names to the links</Checkbox>
        <Checkbox setting="link.addYouToLinks">Add '(you)' to the links</Checkbox>
        <Checkbox setting="link.showPostPopups">Show post in a popup when hovering over a link</Checkbox>
      </>
    );
  }
}

export default Links;
