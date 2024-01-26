import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from "./views/Landing/Landing";
import Home from './views/Home/home';
import NotFound from './views/NotFound/NotFound';

import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} /> 
        <Route path='/Home' element={<Home />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
