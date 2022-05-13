import React from 'react'
import styled from 'styled-components';


const Section = styled.div`
  // margin: 0px;
  // position: absolute;
  // left: 0px;
  // top: 1029px;

  width: 100%;
  height: 657px;
  background: rgba(253, 150, 143, 0.2);
`;


const Title = styled.div`

  padding-top: 71px;
  padding-left: 24px;
  width: 383px;
  height: 107px;
  margin-right: auto;
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


const RecentImage = () => {
  return (
    <Section>       
     <Title>Recent Images</Title>
    </Section>
  )
}

export default RecentImage;