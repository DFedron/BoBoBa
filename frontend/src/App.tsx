import React from 'react';

import './App.css';
import Navbar from'./component/Navbar';
import Hellopage from'./component/Hellopage';
import TestPage from './component/TestPage';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
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
    </Routes>
</BrowserRouter>
  );
}

export default App;
