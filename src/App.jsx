import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './styles/Header.css';
import Sign from './components/Sign';
import PrivateRoute from './components/PrivateRoute';
import LogedIn from './components/LogedIn';
import Error404 from './components/Error404';

const App = () => {
  const [sesion, setSesion] = useState(false);
  return (
    
    <Routes>
      <Route path='*' element={<Error404/>}/>
      <Route path='/' element={<Home />} />
      <Route path='/sign' element={<Sign sesion={sesion} setSesion={setSesion} />} />
      <Route path='/account' element={<PrivateRoute sesion={sesion}>
        <LogedIn />
      </PrivateRoute>} />
    </Routes>


  )
}


export default App;