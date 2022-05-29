import React from 'react';

import './App.css';

import Hellopage from'./components/Hellopage';
import TestPage from './components/TestPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import BobaMap from './templetes/BobaMap'
import ContactUs from './components/ContactUs'
import Image from './components/image'
// import styled from 'styled-components';
import { Route, Routes} from "react-router-dom";
import WhatsNew from './components/WhatsNew';
import Trending from './components/Trending';

export const App: React.FC = () => {
  return (
    
    <Routes>
      <Route path='/'   element={<Hellopage/>} />
      <Route path='/TestPage' element={<TestPage/>} /> 
      <Route path='/SignUp' element={<SignUp/>} /> 
      <Route path='/SignIn' element={<SignIn/>} /> 
      <Route path="/boba-map" element={<BobaMap />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/image" element={<Image />} />
      <Route path="/whats-new" element={<WhatsNew />} />
      <Route path="/trending" element={<Trending />} />
    </Routes>

  );
}
