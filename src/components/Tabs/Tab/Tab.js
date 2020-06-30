import React from 'react';

import { tabShape } from '../../Shape/Shape';
import './Tab.css';

export const Tab = ({ title, tabIndex, onClick, index }) => (
  <button
    key={index}
    type="button"
    href="#"
    className={tabIndex === index
      ? 'tab active'
      : 'tab'
    }
    onClick={() => onClick(index)}
  >
    {title}
  </button>
);

Tab.propTypes = tabShape;
