import React from 'react';
import {
  BrowserRouter as Routers, Link, Route, Routes, Navigate
} from 'react-router-dom';
import CompOne from './components/compOne';
import EmptyPage from './components/emptyPage';
import { LoginForm } from './components/loginPage';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import MapDatas from './components/mapDatas';
import Heaven from "./icons/heaven.jpeg"
import Lense from './icons/lense';
import { ProtectedRoute } from './components/protectedRoute';

function App() {
  return (

    <div >
      <Provider store={store}>
      <Routers>
        <div>
          <Link to="/"><span>Home</span></Link>
          <Link to="/login"><span>Login</span></Link>
        </div>
        <Routes>
          <route
          <Route path="/" element={<CompOne />} />
        
          <Route path="/login" element={<LoginForm />} />
          <Route Component={EmptyPage} />
          {/* <Navigate to='/404'/> */}
        </Routes>
      </Routers>
      <ProtectedRoute/>
      <LoginForm/>
      <h1>Hello, React App!</h1>
      <img src={Heaven} alt='heaven'></img> 
     <Lense/>
      <MapDatas />
      </Provider>
    </div>
  );
}

export default App;
