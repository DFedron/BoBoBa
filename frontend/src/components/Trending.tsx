import React from 'react'
import styled from 'styled-components';
import boba from '../images/Boba.png'

const Section = styled.div`
  display: flex;
  // position: absolute;
  width: 100%;
  height: 807px;
  // left: 3px;
  // top: 1686px;
  // background: rgba(253, 150, 143, 0.2);
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
`;

const Boba = styled.div`    
    background: url(${boba}) no-repeat;
    width: 400px;
    height: 500px;
    margin-top: 40px;
    margin-left: 20%;
    background attachment fixed;
    background-size:cover;
    // background-size: 60% 60%;
    background-position: center;
    
`;

function Trending() {
  return (
    <Section>       
        <Boba />
        <Title>The most popular</Title>
    </Section>

  )
}

export default Trending;