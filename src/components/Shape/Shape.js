import PropTypes from 'prop-types';

export const Shape = PropTypes.shape({
  title: PropTypes.string,
  content: PropTypes.string,
  tabIndex: PropTypes.number,
  onFocus: PropTypes.func,
});
