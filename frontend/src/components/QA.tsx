import React from 'react'

import styled from 'styled-components';

import problem from '../images/problem.png'


const Section = styled.div`
    margin: 0px;
    padding-top: 125px;
    width: 100%;
    display: block;
`;

const SectionUp = styled.div`
    margin: 0px;
    padding-top: 100px;
    height: 350px;
    background: #fff;
    display: flex;
    justify-content: space-evenly;
`;

const UpText = styled.div`    
    width: 368px;
    height: 192px;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.06em;

    color: #F98078;

`;

const SectionDown = styled.div`
    margin-bottom: 150px;
    padding; 0px;
    height: 550px;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #FFEAE9;
`;

const SectionLeft = styled.div`
    margin-left: 100px;
`;

const SectionRight = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

const DownText = styled.div`    
    margin-top: 25px;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.06em;

    color: #F98078;

`;
const Logo = styled.div`    
    background: url(${problem}) no-repeat;
    width: 210px;
    height: 217px;

    
    background attachment fixed;
    background-size:cover;
 

`;

const Input = styled.input`    
    width: 80%;
    height: 76px;
    background: rgba(243, 104, 60, 0.5);
    font-size: xx-large;
    border: none;
`;

const InputTwo = styled.textarea`    
    width: 80%;
    height: 230px;
    background: rgba(243, 104, 60, 0.5);
    font-size: xx-large;
    border: none;
`;

const Button = styled.button`    
    width: 100%;
    height: 50px;
    color: #fff;
    font-size: xx-large;
    background: #F3683C;
    border: none;
    cursor: pointer;
    margin-bottom: 150px;
    border-radius: 10px;
    &:hover{
        color: rgba(253, 150, 143);
    }
`;

function submission(){
    alert("A Successful Submission")
}

function QA() {
    return (
    <Section>

       <SectionUp>
            <UpText>Questions?</UpText>
            <Logo></Logo>
       </SectionUp>

        <SectionDown>
            <SectionLeft>
                <DownText>E-mail</DownText>
                <Input></Input>
                <DownText>Description</DownText>
                <InputTwo></InputTwo>
            </SectionLeft>
            <SectionRight>
                <DownText>Please tell us!</DownText>
                <Button onClick={submission}>Submit</Button>
            </SectionRight>

        </SectionDown>

    </Section>


  )
}
  


export default QA;