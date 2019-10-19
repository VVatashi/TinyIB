import React, { PureComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Settings, { PostAuthor} from '../../../settings';
import { AppState, setOption } from '../../../store';

interface Props {
  readonly settings: Settings;
  readonly onChange: (key: string, value: any) => void;
}

interface State { }

export class Filters extends PureComponent<Props, State> {
  private addNewFilter = () => {
    const { settings } = this.props;
    const hidden = [...settings.filter.hiddenAuthors || []];
    hidden.push({ name: '', tripcode: '' });
    this.props.onChange('filter.hiddenAuthors', hidden);
  };

  private changeFilter = (index: number, value: PostAuthor) => {
    const { settings } = this.props;
    const hidden = [...settings.filter.hiddenAuthors || []];
    hidden[index] = value;
    this.props.onChange('filter.hiddenAuthors', hidden);
  };

  private removeFilter = (index: number) => {
    const { settings } = this.props;
    const hidden = [...settings.filter.hiddenAuthors || []];
    hidden.splice(index, 1);
    this.props.onChange('filter.hiddenAuthors', hidden);
  };

  public render() {
    const { settings } = this.props;
    const filters = (settings.filter.hiddenAuthors || []).map((value, index) => {
      return (
        <li key={index} className="settings-form__list-item">
          <input type="text" className="input settings-form__text"
            placeholder="Name" value={value.name}
            onChange={e => this.changeFilter(index, { ...value, name: e.target.value })} />
          <input type="text" className="input settings-form__text"
            placeholder="!Tripcode" value={value.tripcode}
            onChange={e => this.changeFilter(index, { ...value, tripcode: e.target.value })} />
          <button className="button" onClick={() => this.removeFilter(index)}>Remove</button>
        </li>
      );
    });

    return (
      <>
        <ul className="settings-form__list">{filters}</ul>
        <button className="button" onClick={this.addNewFilter}>Add</button>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    settings: state.settings.settings,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onChange: (key: string, value: any) => dispatch(setOption(key, value)),
  };
};

export const FiltersWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

export default FiltersWithStore;
