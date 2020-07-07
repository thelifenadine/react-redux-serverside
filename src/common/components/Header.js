import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { appInitOnce } from '../actions/app';

const Header = () => {
  const dispatch = useDispatch();

  // dispatch hook example
  const onClickHandler = () => {
    dispatch(appInitOnce());
  };

  return (
    <div>
      <Link data-id="home-link" to="/" onClick={onClickHandler}>Home</Link>
      <Link to="/another">Another Page</Link>
    </div>
  );
};

export default Header;
