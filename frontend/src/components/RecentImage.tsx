import React from 'react'
import styled from 'styled-components';
import boba from '../images/Boba.png'

const Section = styled.div`
  width: 100%;
  height: 757px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  // background: rgba(253, 150, 143, 0.2);
`;

const SectionOne = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.div`

  padding-top: 71px;
  padding-left: 59px;
  width: 383px;
  height: 107px;
  // margin-right: auto;
  font-family: 'Inria Serif';
  font-style: italic;
  font-weight: 300;
  font-size: 64px;
  line-height: 77px;
  display: flex;
  // align-items: center;
  // text-align: center;
  letter-spacing: 0.06em;

  color: #F3683C;

`;

const Boba = styled.div`    
    background: url(${boba}) no-repeat;
    width: 361px;
    height: 213px;
    margin: 40px 70px;
    background attachment fixed;
    background-size:cover;
    // background-size: 60% 60%;
    background-position: center;
    
`;

const BobaOne = styled.div`    
    background: url(${boba}) no-repeat;
    width: 189px;
    height: 234px;
    margin: 80px 30px;
    background attachment fixed;
    background-size:cover;
    // background-size: 60% 60%;
    background-position: center;
    
`;

const RecentImage = () => {
  return (
    <Section>
      <SectionOne>
        <Title>Recent Images</Title>
        <Boba />
        <Boba />
      </SectionOne>
      <SectionOne>
      <BobaOne />
      <BobaOne />
      <BobaOne />
      <BobaOne />
      <BobaOne />
      </SectionOne>
    </Section>
  )
}

export default RecentImage;