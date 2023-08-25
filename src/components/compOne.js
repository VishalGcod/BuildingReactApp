import React from 'react';

function CompOne() {
  const logoutBtn = ()=>{
    console.log('hi');
  };
  return (
    <div>
      <div>CompOne</div>
      <button onClick={logoutBtn}>logout</button>
    </div>
  );
}

export default CompOne;
