import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from '../src/Components/Pages/Homepage/Homepage'
import About from '../src/Components/Pages/About/About';
import Contact from '../src/Components/Pages/Contact/Contact';
import Services from '../src/Components/Pages/Services/Services';

import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
