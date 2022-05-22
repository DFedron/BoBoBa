import React from 'react'
import styled from 'styled-components';
const Section = styled.div`
    
  // position: absolute;
  width: 100%;
  height: 607px;
  // left: 3px;
  // top: 1686px;
  background: rgba(253, 150, 143, 0.2);
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

function Trending() {
  return (
    <Section>       
        <Title>The most popular</Title>
    </Section>

  )
}

export default Trending;