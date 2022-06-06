import React from 'react'

import styled from 'styled-components';
import ButtomNavBar from './FooterNavBar';


const Content = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    font-family: 'HanziPen TC';
    font-style: normal;
    font-weight: 400;
    font-size: 128px;
    line-height: 179px;

    // position: absolute;
    // top: 125px;
    // left: 200px;
    letter-spacing: 0.1em;
    padding: 350px 30px;
    color: #F06C98;
`;



function QA() {
    return (
    <div className='QA'>
        <Content>QA!!!!!</Content>
            
        <ButtomNavBar></ButtomNavBar>
    </div>


  )
}
  


export default QA;