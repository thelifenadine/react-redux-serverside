import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  label,
  id,
  placeholder,
  autoComplete,
  type,
}) => (
  <React.Fragment>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      data-testid={id}
      autoComplete={`${autoComplete}`}
      placeholder={placeholder}
      type={type}
    />
  </React.Fragment>
);

TextInput.defaultProps = {
  autoComplete: false,
  type: 'text',
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.bool,
  type: PropTypes.string,
};

export default TextInput;
