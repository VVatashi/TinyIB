import React, { PureComponent } from 'react';

interface Props {
  readonly onInsertMarkup: (before: string, after: string) => void;
  readonly onInsertQuote: () => void;
}

interface State { }

export class Markup extends PureComponent<Props, State> {
  private onShowColorPopup = () => {
    console.log('onShowColorPopup');
  };

  public render() {
    return (
      <>
        <button type="button" className="button" title="Bold"
          onClick={e => this.props.onInsertMarkup('[b]', '[/b]')}>
          <strong>b</strong>
        </button>

        <button type="button" className="button" title="Italic"
          onClick={e => this.props.onInsertMarkup('[i]', '[/i]')}>
          <em>i</em>
        </button>

        <button type="button" className="button" title="Underline"
          onClick={e => this.props.onInsertMarkup('[u]', '[/u]')}>
          <span className="markup__underline">u</span>
        </button>

        <button type="button" className="button" title="Strikethrought"
          onClick={e => this.props.onInsertMarkup('[s]', '[/s]')}>
          <del>s</del>
        </button>

        <button type="button" className="button" title="Superscript"
          onClick={e => this.props.onInsertMarkup('[sub]', '[/sub]')}>
          <sub>sub</sub>
        </button>

        <button type="button" className="button" title="Subscript"
          onClick={e => this.props.onInsertMarkup('[sup]', '[/sup]')}>
          <sup>sup</sup>
        </button>

        <button type="button" className="button" title="Color"
          onClick={e => this.onShowColorPopup()}>
          color
        </button>

        <button type="button" className="button" title="Code"
          onClick={e => this.props.onInsertMarkup('[code]', '[/code]')}>
          <code>code</code>
        </button>

        <button type="button" className="button" title="Spoiler"
          onClick={e => this.props.onInsertMarkup('[spoiler]', '[/spoiler]')}>
          <span className="markup__spoiler markup__spoiler--visible">sp</span>
        </button>

        <button type="button" className="button" title="Insert quote"
          onClick={e => this.props.onInsertQuote()}>
          <span className="markup__quote">&gt;</span>
        </button>
      </>
    );
  }
}

export default Markup;
