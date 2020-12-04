import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

import { fetchRecipesIfNeeded } from '../actions/recipes';

const useStyles = createUseStyles((theme) => ({
  container: {
    borderBottom: theme.border,
  },
  outerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  linkGridRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  link: {
    color: theme.nav.textColor,
    letterSpacing: theme.nav.letterSpacing,
    paddingTop: theme.nav.linkPadding + 1,
    paddingBottom: theme.nav.linkPadding,
    '&:hover': {
      color: theme.nav.hoverColor,
    },
  },
  active: {
    color: theme.nav.activeColor,
    borderBottom: `1px solid ${theme.nav.activeColor}`,
  },
  left: {
    marginRight: 25,
  },
  right: {
    marginLeft: 5,
  }
}));

const getActiveTab = (currentPath) => ({
  home: currentPath === '/',
  another: currentPath === '/another',
  somewhere: currentPath === '/somewhere',
  signup: currentPath === '/signup',
  login: currentPath === '/login',
});

const HeaderNavigation = ({ containerClassName, itemClassName }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [activeTabs, setActiveTabs] = useState(getActiveTab(location.pathname));
  const css = useStyles();

  // dispatch hook example
  const onClickHandler = () => {
    dispatch(fetchRecipesIfNeeded('lunch'));
  };

  useEffect(() => {
    setActiveTabs(getActiveTab(location.pathname));
  }, [location.pathname]);

  return (
    <div className={clsx(containerClassName, css.container)}>
      <div className={clsx(itemClassName, css.outerRow)}>
        <div className={css.linkGrid}>
          <Link
            className={clsx(css.link, css.left, {[css.active]: activeTabs.home })}
            data-id="home-link"
            to="/"
            onClick={onClickHandler}
          >
            HOME
          </Link>
          <Link
            className={clsx(css.link, css.left, { [css.active]: activeTabs.somewhere })}
            to="/somewhere"
          >
            SOMEWHERE ELSE
          </Link>
          <Link
            className={clsx(css.link, css.left, { [css.active]: activeTabs.another })}
            to="/another"
          >
            ANOTHER ONE
          </Link>
        </div>
        <div className={css.linkGridRight}>
          <Link
            className={clsx(css.link, css.right, { [css.active]: activeTabs.login })}
            to="/login"
          >
            Login
          </Link>
          <span className={clsx(css.link, css.right)} >/</span>
          <Link
            className={clsx(css.link, css.right, { [css.active]: activeTabs.signup })}
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

HeaderNavigation.propTypes = {
  containerClassName: PropTypes.string,
  itemClassName: PropTypes.string,
};

export default HeaderNavigation;
