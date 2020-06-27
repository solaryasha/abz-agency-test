import PropTypes from 'prop-types';

export const positionsShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export const RadioButtonShape = PropTypes.shape({
  success: PropTypes.bool.isRequired,
  positions: PropTypes.arrayOf(positionsShape).isRequired,
});
