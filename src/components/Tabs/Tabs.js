import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab/Tab';
import { Info } from './Info/Info';
import './Tabs.css';

export class Tabs extends React.Component {
  constructor(props) {
    super({ props });

    this.state = {
      tabIndex: 0,
    };
  }

  onFocus = (index) => {
    this.setState({
      tabIndex: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { tabIndex } = this.state;

    return (
      <>
        <div className="tabs-wrapper">
          <ul className="tabs-list">
            {tabs.map((tab, index) => (
              <li className="tabs-list__item" key={tab.title}>
                <Tab
                  title={tab.title}
                  tabIndex={tabIndex}
                  index={index}
                  onFocus={this.onFocus}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="info-wrapper">
          <ul className="info-list">
            {tabs.map((tab, index) => (
              <li className="info-list__item" key={tab.title}>
                <Info
                  info={tab.content}
                  tabIndex={tabIndex}
                  index={index}
                />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
