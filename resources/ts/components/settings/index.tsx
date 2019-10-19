import React, { PureComponent } from 'react';

import {
  Filters,
  PostsWithStore as Posts,
  Images,
  Links,
  Form,
  TimeWithStore as Time,
  Common,
} from './tabs';

const enum Tab {
  Filter = 'filter',
  Posts = 'posts',
  Images = 'images',
  Links = 'links',
  Form = 'form',
  Time = 'time',
  Common = 'common',
}

const tabTitles: { [key: string]: string } = {
  [Tab.Filter]: 'Filter',
  [Tab.Posts]: 'Posts',
  [Tab.Images]: 'Images',
  [Tab.Links]: 'Links',
  [Tab.Form]: 'Form',
  [Tab.Time]: 'Time',
  [Tab.Common]: 'Common',
};

const tabComponents: { [key: string]: React.ReactElement } = {
  [Tab.Filter]: <Filters />,
  [Tab.Posts]: <Posts />,
  [Tab.Images]: <Images />,
  [Tab.Links]: <Links />,
  [Tab.Form]: <Form />,
  [Tab.Time]: <Time />,
  [Tab.Common]: <Common />,
};

interface Props { }

interface State {
  readonly currentTab: Tab;
}

export class Settings extends PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      currentTab: Tab.Common,
    };
  }

  private setTab = (tab: Tab) => {
    this.setState({
      currentTab: tab,
    });
  };

  public render() {
    const tabs = Object.keys(tabTitles).map((tab: Tab, index: number) => {
      const title = tabTitles[tab];
      const isCurrent = this.state.currentTab === tab;
      const className = [
        'settings-form__tab',
        isCurrent ? 'settings-form__tab--active' : '',
      ].join(' ');

      return (
        <li key={index} className={className} onClick={() => this.setTab(tab)}>
          {title}
        </li>
      );
    });
    const tab = tabComponents[this.state.currentTab];

    return (
      <div className="settings-form">
        <ul className="settings-form__tabs">
          {tabs}
        </ul>

        <div className="settings-form__tab-content">
          {tab}
        </div>
      </div>
    );
  }
}

export default Settings;
