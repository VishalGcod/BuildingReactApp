import React from 'react';

function CompOne() {
  const logoutBtn = ()=>{
    console.log('hi');
    localStorage.clear()
    window.location.reload()
  };
  return (
    <div>
      <div>CompOne</div>
      <button onClick={logoutBtn}>logout</button>
    </div>
  );
}

export default CompOne;
