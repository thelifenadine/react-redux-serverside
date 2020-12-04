import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles((theme) => ({
  default: {
    marginBottom: theme.grid.spacing,
  }
}));

const Header1 = ({ className, children }) => {
  const css = useStyles();

  return (
    <h1 className={clsx(css.default, className)}>{children}</h1>
  );
};

Header1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Header1;
