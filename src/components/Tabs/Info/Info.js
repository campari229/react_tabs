import React from 'react';

import { infoShape } from '../../Shape/Shape';
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

Info.propTypes = infoShape;
