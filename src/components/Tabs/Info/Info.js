import React from 'react';
import PropTypes from 'prop-types';
import './Info.css';

export const Info = ({ info, tabIndex, index }) => (
  <div
    className={tabIndex === index
      ? 'info info--active'
      : 'info'
    }
  >
    {info}
  </div>
);

Info.propTypes = {
  info: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
