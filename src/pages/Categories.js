import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesActions } from '../redux/categories/categories-slice';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  const checkStatusHandler = () => {
    dispatch(categoriesActions.status('Under construction'));
  };

  return (
    <div>
      <button type="button" onClick={checkStatusHandler}>
        Check Status
      </button>
      {status && <h2>{status}</h2>}
    </div>
  );
};

export default Categories;
