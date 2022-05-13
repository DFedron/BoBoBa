import React from 'react'
import styled from 'styled-components';
import logo from '../images/Logo.png';

const Section = styled.div`
    
  width: 100%;
  height: 607px;
  background: rgba(253, 150, 143, 0.2);
  display: flex;
`;

const Logo = styled.div`    
    background: url(${logo}) no-repeat;
    width: 264px;
    height: 264px;
    align-self: center;
    background-size:cover;

`;

function ButtomNavBar() {
  return (
    <Section>
        <Logo></Logo>
    </Section>
  )
}

export default ButtomNavBar;