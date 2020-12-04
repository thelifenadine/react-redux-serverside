import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles  } from 'react-jss';
import { asyncConnect } from 'redux-connect';
import { renderRoutes } from 'react-router-config';
import HeaderNavigation from './HeaderNavigation';
import withTheme from './withTheme';
import globalStyles from '../styles/globalStyles';
import clsx from 'clsx';
import { mediaQueryMin768, mediaQueryMin1000 } from '../styles/mediaQueries';
import { fetchRecipesIfNeeded } from '../actions/recipes';

const useStyles = createUseStyles((theme) => ({
  ...globalStyles(theme),
  mainLayout: {
    display: 'grid',
    gridTemplateRows: '50px 1fr',
    gridTemplateColumns: '1fr',
  },
  columnContainer: {
    display: 'grid',
    gridTemplateColumns: '20px auto 20px', // move to theme?
    [mediaQueryMin768]: {
      gridTemplateColumns: 'auto 600px auto',
    },
    [mediaQueryMin1000]: {
      gridTemplateColumns: 'auto 935px auto',
    }
  },
  containerItem: {
    'grid-column': 2,
  },
  mainSpacing: {
    marginTop: theme.grid.spacing,
  }
}));

const MainLayout = ({ route }) => {
  const css = useStyles();
  return (
    <div className={css.mainLayout}>
      <HeaderNavigation
        containerClassName={css.columnContainer}
        itemClassName={css.containerItem}
      />
      <div className={css.columnContainer}>
        <div className={clsx(css.containerItem, css.mainSpacing)}>
          {renderRoutes(route.routes)}
        </div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  route: PropTypes.object.isRequired,
};

export default asyncConnect([{
  promise: ({ store: { dispatch } }) => (
    dispatch(fetchRecipesIfNeeded('appetizer'))
  ),
}])(withTheme(MainLayout));

