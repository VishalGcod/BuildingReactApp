import React from 'react';
import { BrowserRouter as Routers, Link, Route, Routes } from "react-router-dom";
import CompOne from './components/compOne';
// import CompTwo from './components/compTwo';
import EmptyPage from './components/emptyPage';
import { LoginForm } from './components/loginPage';

function App() {
  return (
    <div>
      <Routers>
        <div>
          <Link to='/'><span>Home</span></Link>
          <Link to='/login'><span>Login</span></Link>
        </div>
        <Routes>
        <Route path='/' element={<CompOne/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='*' element={<EmptyPage/>}></Route>
        </Routes>
      </Routers>
      <h1>Hello, React App!</h1>
    </div>
  );
}

export default App;