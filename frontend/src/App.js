import Navbar from'./component/Navbar';
import Hellopage from'./component/Hellopage';
import RecentImage from './component/RecentImage';
import Trending from './component/Trending';
import ButtomNavBar from './component/ButtomNavBar';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Section = styled.div`
  position: relative;
  display: block;
`;

function App() {
  return (
    <Section>
      <Navbar />
      <Hellopage />
      <RecentImage />
      <Trending />
      <ButtomNavBar />
    </Section>
  );
}

export default App;
