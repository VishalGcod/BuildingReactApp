import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Routers, Link, Route, Routes, Navigate, Outlet
  } from 'react-router-dom';

export const ProtectedRoute=()=> {
  const dispatch=useDispatch()
  const auth=useSelector((state)=>state.authenticate.auth)
    let authenticate={"value":auth}
  return (
    <div>
        {authenticate.value?<Outlet/>:<Navigate to="/login" />}
    </div>
  )
}