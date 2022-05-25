import React from 'react';

import './App.css';
import Navbar from'./components/Navbar';
import Hellopage from'./components/Hellopage';
import TestPage from './components/TestPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import BobaMap from './templetes/BobaMap'
import ContactUs from './components/ContactUs'
// import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>

      <Route path='/'   element={<Hellopage/>} />
      <Route path='/TestPage' element={<TestPage/>} /> 
      <Route path='/SignUp' element={<SignUp/>} /> 
      <Route path='/SignIn' element={<SignIn/>} /> 
      <Route path="/boba-map" element={<BobaMap />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
