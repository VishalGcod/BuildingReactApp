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
import CondRenderTransition from './components/condRender&Transition';
import { DropdownBar } from './components/dropdownComp';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routers>
          <div>
            <Link to='/'>
              <span>Login</span>
            </Link>
            <Link to='/pro'>
              <span>Main</span>
            </Link>
          </div>
          <Routes>
            <Route path='/' element={ <LoginForm2/> } />
            <Route element={<ProtectedRoute />}>
              <Route path='/pro' element={<CompOne />} />
            </Route>
            {/* <Route Component={EmptyPage} /> */}
          </Routes>
        </Routers>
        {/* <LoginForm /> */}        {/* <img src={Heaven} alt='heaven'></img> */}
        <Lense />
        {/* <MapDatas /> */}
        {/* <MapTableDatas/> */}
        {/* <GridLayout/> */}
        {/* <CondRenderTransition/> */}
      </Provider>
    </div>
  );
}

export default App;
