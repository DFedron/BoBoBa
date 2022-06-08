import React from 'react'
import styled from 'styled-components';
import boba8 from '../images/boba8.png'
import love from '../images/love.png'

const Section = styled.div`
  display: flex;
  // position: absolute;
  width: 100%;
  height: 807px;


  @media (max-width: 1440px) {


    height: 650px;

  }
`;

const Love = styled.div`    
    background: url(${love}) no-repeat;
    width: 23px;
    height: 23px;
    background attachment fixed;
    background-size:cover;
    margin: 10px

`;

const Title = styled.div`  

  width: 344px;
  height: 156px;

  padding-right: 40px;
  padding-top: 228px;
  margin-left: auto;
  font-family: 'Inria Serif';
  font-style: italic;
  font-weight: 300;
  font-size: 64px;
  line-height: 77px;

  display: flex;
  letter-spacing: 0.06em;

  color: #F3683C;

  @media (max-width: 1440px) {

    width: 244px;
    font-size: 50px;

  }
`;

const LogoWrapper = styled.div`    
  display: block;
  margin-top: 40px;
  margin-left: 20%;

  font-family: 'Inria Serif';
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: 0.06em;

  color: #000000;
`;
const Boba = styled.div`    
    background: url(${boba8}) no-repeat;
    width: 400px;
    height: 500px;

    background attachment fixed;
    background-size:cover;
    // background-size: 60% 60%;
    background-position: center;
    @media (max-width: 1440px) {

      width: 360px;
      height: 450px;
      font-size: 50px;
  
    }
`;

function Popular() {
  return (
    <Section> 
        <LogoWrapper>      
          <Boba></Boba>
          <div style={{display: 'flex'}}>
            <Love />
            <span style={{margin: '10px'}} >234,234,567,987</span>
          </div>
        </LogoWrapper>
        <Title>The most popular</Title>
    </Section>

  )
}

export default Popular;