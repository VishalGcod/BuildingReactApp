import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute=()=> {
  const dispatch=useDispatch()
  const auth=useSelector((state)=>state.authenticate.auth)
  const getData=localStorage.getItem('data')
  const getData2=JSON.parse(getData)
    let authenticate={"value":getData2}
  return (
    <div>
        {authenticate.value?<Outlet/>:<Navigate to="/" />}
    </div>
  )
}