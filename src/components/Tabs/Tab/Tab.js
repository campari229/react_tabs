import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

export const Tab = ({ title, tabIndex, onFocus, index }) => (
  <button
    type="button"
    href="#"
    className={tabIndex === index
      ? 'tab active'
      : 'tab'
    }
    onFocus={() => onFocus(index)}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onFocus: PropTypes.func.isRequired,
};
