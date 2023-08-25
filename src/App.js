import React from 'react';
import {
  BrowserRouter as Routers, Link, Route, Routes,
} from 'react-router-dom';
import CompOne from './components/compOne';
import EmptyPage from './components/emptyPage';
import { LoginForm } from './components/loginPage';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import MapDatas from './components/mapDatas';
import Heaven from "./icons/heaven.jpeg"
import Lense from './icons/lense';

function App() {
  return (

    <div >
      <Provider store={store}>
      {/* <Routers>
        <div>
          <Link to="/"><span>Home</span></Link>
          <Link to="/login"><span>Login</span></Link>
        </div>
        <Routes>
          <Route path="/" element={<CompOne />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </Routers> */}
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
