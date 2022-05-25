import React from 'react'
import styled from 'styled-components';



const Section = styled.div`
    margin: 0px;
    padding-top: 125px;
    width: 100%;
    display: block;
`;

const Title = styled.div`
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.06em;

    color: #F98078;

    margin-top: 230px;
`;

const Text = styled.div`
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.06em;

    color: #F98078;

    // width: 80%;
    margin: 50px 350px;

`;

function WhatsNew() {
  return (
        <Section>
            <Title>What’s new in Boboba</Title>
            <Text>Boboba is always getting find the best boba store for you.  new: add maps in the find map page,</Text>
        </Section>
 
  )
}

export default WhatsNew;