import get from 'lodash/get';
import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import { connect } from 'react-redux';

const useStyles = createUseStyles({
  anotherH2: {
    color: 'orange',
  }
});

const AnotherPage = (props) => {
  const { appetizers } = props;
  const theme = useTheme();
  const css = useStyles({ ...props, theme });

  return (
    <div className={css.container}>
      <h2 className={css.anotherH2}>AnotherPage</h2>
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
