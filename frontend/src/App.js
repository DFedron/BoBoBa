import Navbar from'./component/Navbar';
import Hellopage from'./component/Hellopage';

import styled from 'styled-components';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

const Section = styled.div`
  position: absolute;
  display: block;
  top: 0px;
  left: 0px;
  width: 100%
  `;

function App() {
  return (
    <Section>
      <Navbar />
      <Hellopage />

    </Section>
  );
}

export default App;
