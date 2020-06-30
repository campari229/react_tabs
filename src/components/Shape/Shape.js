import PropTypes from 'prop-types';

export const infoShape = PropTypes.shape({
  info: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}).isRequired;

export const tabShape = {
  title: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
