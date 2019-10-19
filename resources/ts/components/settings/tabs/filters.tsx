import React, { PureComponent } from 'react';

import {
  CheckboxWithStore as Checkbox,
  FiltersWithStore as FiltersControl,
} from '../controls';

interface Props { }

interface State { }

export class Filters extends PureComponent<Props, State> {
  public render() {
    return (
      <>
        <Checkbox setting="filter.removeHiddenPosts">Remove hidden posts</Checkbox>
        <Checkbox setting="filter.hideThreads">Hide threads</Checkbox>

        <h3 className="settings-form__option-title">Hide posts by author</h3>
        <FiltersControl />
      </>
    );
  }
}

export default Filters;
