import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

// import { appInitOnce } from '../actions/app';
import { fetchPostsIfNeeded } from '../actions/recipe';

const useStyles = createUseStyles((theme) => ({
  container: {
    borderBottom: theme.border,
  },
  linkGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  link: {
    padding: 16, // move to theme
  },
  active: {
    backgroundColor: theme.palette.border,
  },
}));

const getActiveTab = (currentPath) => ({
  home: currentPath === '/',
  another: currentPath === '/another',
  somewhere: currentPath === '/somewhere',
});

const Header = ({ containerClassName, itemClassName }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [activeTabs, setActiveTabs] = useState(getActiveTab(location.pathname));
  const css = useStyles();

  // dispatch hook example
  const onClickHandler = () => {
    dispatch(fetchPostsIfNeeded('sweets'));
  };

  useEffect(() => {
    setActiveTabs(getActiveTab(location.pathname));
  }, [location.pathname]);

  return (
    <div className={clsx(containerClassName, css.container)}>
      <div className={clsx(itemClassName, css.linkGrid)}>
        <Link
          className={clsx(css.link, {[css.active]: activeTabs.home })}
          data-id="home-link"
          to="/"
          onClick={onClickHandler}
        >
          HOME
        </Link>
        <Link
          className={clsx(css.link, { [css.active]: activeTabs.somewhere })}
          to="/somewhere"
        >
          SOMEWHERE ELSE
        </Link>
        <Link
          className={clsx(css.link, { [css.active]: activeTabs.another })}
          to="/another"
        >
          ANOTHER ONE
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  containerClassName: PropTypes.string,
  itemClassName: PropTypes.string,
};

export default Header;
