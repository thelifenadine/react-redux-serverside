import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createUseStyles  } from 'react-jss';

import Header from './Header';
import Home from './Home';
import AnotherPage from './AnotherPage';
import NotFound from './NotFound';
import globalStyles from '../styles/globalStyles';
import { mediaQueryMin768, mediaQueryMin1000 } from '../styles/mediaQueries';

const useStyles = createUseStyles((theme) => ({
  ...globalStyles(theme),
  mainLayout: {
    display: 'grid',
    gridTemplateRows: '50px 1fr',
    gridTemplateColumns: '1fr',
  },
  columnContainer: {
    display: 'grid',
    gridTemplateColumns: '20px auto 20px', // move to theme
    [mediaQueryMin768]: {
      gridTemplateColumns: 'auto 600px auto',
    },
    [mediaQueryMin1000]: {
      gridTemplateColumns: 'auto 935px auto',
    }
  },
  containerItem: {
    'grid-column': 2,
  }
}));

const MainLayout = () => {
  const css = useStyles();

  return (
    <div className={css.mainLayout}>
      <Header
        containerClassName={css.columnContainer}
        itemClassName={css.containerItem}
      />
      <div className={css.columnContainer}>
        <div className={css.containerItem}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/another">
              <AnotherPage />
            </Route>
            <NotFound default />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
