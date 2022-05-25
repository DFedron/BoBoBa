import React from 'react'
import styled from 'styled-components';
// import ButtomNavBar from './FooterNavBar'
// import boba from '../images/Boba.png';

const Section = styled.div`
    // z-index: -1;
    padding-top: 125px;
    display: grid;
    // grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 2fr 2fr;
    height: 1000px;
`;




const TextImage = styled.div`
    position: absolute;
    width: 150px;
    height: 100px;
    left: 75px;
    top: 149px;

    z-index: -1;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.06em;

    color: #F98078;
`;

const VerticalBreak = styled.div`
    position: absolute;
    z-index: -1;
    width: 8px;
    height: 120px;
    background: #F98078;
    left: 270px;
    top: 180px;

`;

const Break = styled.div`
    z-index: -1;
    position: absolute;
    width: 520px;
    height: 8px;
    left: 59px;
    top: 238px;
    background: #F98078;
`;

const Text = styled.div`
    position: absolute;
    width: 460px;
    height: 50px;
    left: 300px;
    top: 240px;

    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.06em;

    color: #F98078;
`;

// const Boba = styled.div`    
//     background: url(${boba}) no-repeat;
//     width: 207px;
//     height: 276px;
//     margin-top: 40px;
//     background attachment fixed;
//     background-size:cover;
//     // background-size: 60% 60%;
//     background-position: center;
//     display: block;
// `;



function Trending() {
  return (

        <Section>
                <TextImage>
                    Trandings
                </TextImage>
                <VerticalBreak />
                <Break />
                <Text>Find the most popular Boba</Text>
 
        </Section>


  )
}

export default Trending;