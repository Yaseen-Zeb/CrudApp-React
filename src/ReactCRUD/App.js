import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './css/style.css';
import MiddleWare from './components/MiddleWare';
import View from './components/View';
import Edit from './components/Update';
import Add from './components/Add';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';



const App = () => {
  return (
    <>
    <HashRouter >
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<MiddleWare Component={View} />}/>
            <Route path='/edit/:id' element={<MiddleWare Component={Edit}/>}/>
            <Route path='/add' element={<MiddleWare Component={Add}/>}/>
        </Routes>
    </HashRouter>
    </>
  )
}

export default App