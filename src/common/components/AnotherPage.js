import get from 'lodash/get';
import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import { connect } from 'react-redux';
import Header1 from './layout/Header1';

const useStyles = createUseStyles({
  headingStyles: {
    color: 'orange',
  }
});

const AnotherPage = (props) => {
  const { appetizers } = props;
  const theme = useTheme();
  const css = useStyles({ ...props, theme });

  return (
    <div className={css.container}>
      <Header1 className={css.headingStyles}>Another Page Header, this time in orange. data comes from connect (parent component connected and fetched via async)</Header1>
      {appetizers &&
        <ul>
          {appetizers.map(item => (<li key={item.name}>{item.name}</li>))}
        </ul>
      }
    </div>
  );
};

AnotherPage.propTypes = {
  appetizers: PropTypes.array,
};

// added to the store by MainLayout
const mapStateToProps = (state) => {
  const appetizerItems = get(state, 'recipesByCategory.appetizer.items', []);

  return { appetizers: appetizerItems };
};

export default connect(mapStateToProps)(AnotherPage);
