import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  text,
  id,
  type,
}) => (
  <button
    id={id}
    data-testid={id}
    type={type}
  >
    {text}
  </button>
);

Button.defaultProps = {
  type: 'submit',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};


export default Button;
