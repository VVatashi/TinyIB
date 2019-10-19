import React, { PureComponent } from 'react';

import {
  CheckboxWithStore as Checkbox,
  RadioWithStore as Radio,
} from '../controls';

interface Props { }

interface State { }

export class Images extends PureComponent<Props, State> {
  public render() {
    return (
      <>
        <Checkbox setting="image.nsfw">Enable NSFW mode</Checkbox>
        <Checkbox setting="image.showVideoOverlay">Show video overlay</Checkbox>
        <Checkbox setting="image.hidePopupOnOutsideClick">Close image popup when clicking outside</Checkbox>
        <Checkbox setting="image.autoPlay">Autoplay audio & video files</Checkbox>
        <Checkbox setting="image.replaceThumbnail">Replace image thumbnails with original</Checkbox>
        <Checkbox setting="image.replaceThumbnailGif">Replace GIF thumbnails with original</Checkbox>
        <Checkbox setting="image.modalAtTop">Show media popup on top of the controls</Checkbox>

        <h3 className="settings-form__option-title">Expand images</h3>
        <Radio setting="image.expandImages" value="tab">In a new tab</Radio>
        <Radio setting="image.expandImages" value="post">In post</Radio>
        <Radio setting="image.expandImages" value="popup">In popup</Radio>
      </>
    );
  }
}

export default Images;
