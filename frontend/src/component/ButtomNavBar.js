import React from 'react'
import styled from 'styled-components';
import logo from '../images/Logo.png';

const Section = styled.div`
    
  position: absolute;
  width: 100%;
  height: 607px;
  left: 3px;
  top: 2293px;
  background: rgba(253, 150, 143, 0.2);
`;

const Logo = styled.div`    
    background: url(${logo}) no-repeat;
    width: 262px;
    height: 264px;
    margin: 220px 15px;
    align-items: center;
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

export default ButtomNavBar