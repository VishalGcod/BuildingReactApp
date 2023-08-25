import React from 'react';
import { BrowserRouter as Routers, Link, Route, Routes } from "react-router-dom";
import CompOne from './components/compOne';
import CompTwo from './components/compTwo';
import EmptyPage from './components/emptyPage';

function App() {
  return (
    <div>
      <Routers>
        <div>
          <Link to='/'><span>Home</span></Link>
          <Link to='/about'><span>About</span></Link>
        </div>
        <Routes>
        <Route path='/' element={<CompOne/>}></Route>
        <Route path='/about' element={<CompTwo/>}></Route>
        <Route path='*' element={<EmptyPage/>}></Route>
        </Routes>
      </Routers>
      <h1>Hello, React App!</h1>
    </div>
  );
}

export default App;
