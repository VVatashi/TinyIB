import React, { PureComponent } from 'react';

import {
  CheckboxWithStore as Checkbox,
  RadioWithStore as Radio,
  ReplacesWithStore as Replaces,
} from '../controls';

interface Props { }

interface State { }

export class Form extends PureComponent<Props, State> {
  public render() {
    return (
      <>
        <Checkbox setting="form.saveSubject">Add names to the links</Checkbox>
        <Checkbox setting="form.saveName">Save name after posting</Checkbox>
        <Checkbox setting="form.showMarkup">Show markup buttons</Checkbox>
        <Checkbox setting="form.saveFormState">Save form floating state on page reload</Checkbox>
        <Checkbox setting="form.insertTagsInPairs">Insert tags in pairs</Checkbox>

        <h3 className="settings-form__option-title">Form Alignment</h3>
        <Radio setting="form.align" value="left">On the left</Radio>
        <Radio setting="form.align" value="center">In the center</Radio>

        <h3 className="settings-form__option-title">Preview Alignment</h3>
        <Radio setting="form.previewAlign" value="left">On the left</Radio>
        <Radio setting="form.previewAlign" value="right">On the right</Radio>

        <h3 className="settings-form__option-title">Replaces</h3>
        <Replaces />
      </>
    );
  }
}

export default Form;
