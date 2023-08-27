import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { protectedRoute } from '../redux/actions';

function CompOne() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authenticate.auth);

  const logoutBtn = () => {
    // localStorage.clear()
    // window.location.reload()
    dispatch(protectedRoute(!auth));
    localStorage.setItem('data', JSON.stringify(auth));
    const getData = localStorage.getItem('data');
    const getData2 = JSON.parse(getData);
    console.log('values :', getData2);
  };
  return (
    <div>
      <div>CompOne</div>
      <button onClick={logoutBtn}>logout</button>
    </div>
  );
}

export default CompOne;
