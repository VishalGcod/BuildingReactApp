import React from 'react';
import { BrowserRouter as Routers, Link, Route, Routes, Navigate } from 'react-router-dom';
import CompOne from './components/compOne';
import EmptyPage from './components/emptyPage';
import { LoginForm } from './components/loginPage';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import MapDatas from './components/mapDatas';
import Heaven from './icons/heaven.jpeg';
import Lense from './icons/lense';
import { ProtectedRoute } from './components/protectedRoute';
import { LoginForm2 } from './components/newLoginAntdForm';
import MapTableDatas from './components/tableMapData';
import GridLayout from './components/gridLayout';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routers>
          <div>
            <Link to='/'>
              <span>Home</span>
            </Link>
            <Link to='/login'>
              <span>Login</span>
            </Link>
          </div>
          <Routes>
            {/* <Route path='/login' element={<LoginForm />} /> */}
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<CompOne />} />
            </Route>
            <Route Component={EmptyPage} />
          </Routes>
        </Routers>
        {/* <LoginForm /> */}
        <LoginForm2/>
        <h1>Hello, React App!</h1>
        <img src={Heaven} alt='heaven'></img>
        <Lense />
        <MapDatas />
        <MapTableDatas/>
        <GridLayout/>
      </Provider>
    </div>
  );
}

export default App;
