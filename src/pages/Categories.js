import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  const checkStatusHandler = () => {
    dispatch(checkStatus('Under construction'));
  };

  return (
    <div className="categories-page">
      <button type="button" onClick={checkStatusHandler}>
        Check Status
      </button>
      {status && <h2>{status}</h2>}
    </div>
  );
};

export default Categories;
