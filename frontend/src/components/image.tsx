import React from 'react'
import styled from 'styled-components';
import ButtomNavBar from './FooterNavBar'
import boba from '../images/Boba.png';
const Section = styled.div`
    padding-top: 125px;
    display: grid;
    // grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 2fr 2fr;
    height: 1000px;
`;

const SectionOne = styled.div`
    display: flex;

`;

const SectionTwo = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
`;

const TextTopPost = styled.div`
    width: 120px;
    margin-left: auto;
    
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    display: flex;


    text-align: center;
    align-self: center;
    
    letter-spacing: 0.06em;

    color: #F98078;

`;

const TextMostRecent = styled.div`
    width: 150px;
    margin-left: auto;
    margin-top: 40px;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    display: flex;


    text-align: center;
    
    letter-spacing: 0.06em;

    color: #F98078;

`;

const TextImage = styled.div`
    position: absolute;
    width: 150px;
    height: 100px;
    left: 50px;
    top: 149px;


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

    width: 8px;
    height: 120px;
    background: #F98078;
    left: 201.31px;
    top: 170.08px;

`;

const Break = styled.div`
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
    left: 230px;
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

const Boba = styled.div`    
    background: url(${boba}) no-repeat;
    width: 207px;
    height: 276px;
    margin-top: 40px;
    background attachment fixed;
    background-size:cover;
    // background-size: 60% 60%;
    background-position: center;
    display: block;
`;

// const Number = styled.div`    
//     font-family: 'Inria Serif';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 20px;
//     line-height: 24px;
//     display: flex;
//     align-items: center;
//     text-align: center;
//     letter-spacing: 0.06em;

//     color: #F98078;

// `;

function Image() {
  return (
    <>
        <Section>
            <SectionOne>
                <TextImage>
                    Images
                </TextImage>
                <VerticalBreak />
                <Break />
                <Text>Show your recent Boba</Text>
            </SectionOne>
            
            <SectionTwo>
                <TextTopPost>Top posts</TextTopPost>
                <Boba />
                <Boba />
                <Boba />               
                
            </SectionTwo>
            <SectionTwo>
                <TextMostRecent>Most Recent</TextMostRecent>
                <Boba />
                <Boba />
                <Boba />
            </SectionTwo>
        </Section>
        <ButtomNavBar /> 
    </>
  )
}

export default Image;