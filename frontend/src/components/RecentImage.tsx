import React from 'react'
import styled from 'styled-components';
import boba from '../images/Boba.png'
import boba13 from '../images/boba13.png';
import boba12 from '../images/boba12.png';
import boba10 from '../images/boba10.png';
import boba9 from '../images/boba9.png';
import boba11 from '../images/boba11.png';
import boba4 from '../images/boba4.png';
import boba3 from '../images/boba3.png';

const Section = styled.div`
  width: 100%;
  height: 757px;
  padding-top: 120px;
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
        <Boba style={{backgroundImage: `url(${boba13})`}}/>
        <Boba style={{backgroundImage: `url(${boba12})`}}/>
      </SectionOne>
      <SectionOne>
      <BobaOne style={{backgroundImage: `url(${boba10})`}}/>
      <BobaOne style={{backgroundImage: `url(${boba9})`}}/>
      <BobaOne style={{backgroundImage: `url(${boba11})`}}/>
      <BobaOne style={{backgroundImage: `url(${boba3})`}}/>
      <BobaOne style={{backgroundImage: `url(${boba4})`}}/>
      </SectionOne>
    </Section>
  )
}

export default RecentImage;