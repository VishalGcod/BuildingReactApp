import React from 'react'
import {
    BrowserRouter as Routers, Link, Route, Routes, Navigate, Outlet
  } from 'react-router-dom';

export const ProtectedRoute=()=> {
    let auth={"value":true}
  return (
    <div>
        {auth.value?<Outlet/>:<Navigate to="/login" />}
    </div>
  )
}