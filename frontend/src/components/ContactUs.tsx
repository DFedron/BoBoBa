import React from 'react'
import styled from 'styled-components';

import globalLogo from "../images/global-connection.png"
import discord from "../images/discord.png"
import github  from "../images/github.png"
import twitter from "../images/twitter.png"
import ButtomNavBar from './FooterNavBar';

const Section = styled.div`
    margin: 0px;
    padding-top: 125px;
    width: 100%;
    display: block;
`;

const SectionUp = styled.div`
    margin: 0px;
    padding; 0px;
    height: 377px;
    background: #FFEAE9;

`;

const Title = styled.span`
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
    padding-top: 3%;
    padding-left: 10%
  // font-weight: bold;
`;

const ContentWrapper = styled.div`
    height: 53%;
    display: flex;
`;

const ContentUp = styled.span`
    width: 30%;
    padding-top: 0;
    padding-left: 15%;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.06em;

    color: #F98078;
`;

const EmailUs = styled.span`
    margin-top:  60px;
    margin-left: 6%;
    padding: 10px 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;

    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    letter-spacing: 0.06em;
    
    color: #F98078;
    
    border: 8px solid #FFFFFF;
`;


const GlobalLogo = styled.div`    
    background: url(${globalLogo}) no-repeat;
    width: 200px;
    height: 200px;
    margin-left: 7%;
    
    background attachment fixed;
    background-size:cover;
 

`;

const SectionDown = styled.div`
    margin-bottom: 150px;
    padding; 0px;
    height: 517px;
    background: #fff;
    display: flex;
`;

const ContentDown = styled.div`
    // padding: 10%;
    margin-left: 8%;
    width: 50%;

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
const LogoWrapper = styled.div`   
    width: 50%; 
    // margin-left: 9%;
    display: flex;
    align-items: center;
    text-align: center;

`;
const Discord = styled.div`    
    background: url(${discord}) no-repeat;
    width: 100px;
    height: 100px;
 
    margin: 50px;
    background attachment fixed;
    background-size:cover;
 

`;


const GitHub = styled.div`    
    background: url(${github}) no-repeat;
    width: 100px;
    height: 100px;

    margin: 50px;
    background attachment fixed;
    background-size:cover;
 

`;

const Twitter = styled.div`    
    background: url(${twitter}) no-repeat;
    width: 100px;
    height: 100px;

    margin: 50px;
    background attachment fixed;
    background-size:cover;
 

`;

function ContactUs() {
  return (
        <Section>
            <SectionUp>
                <Title>Contact us</Title>
                <ContentWrapper>
                    <ContentUp>
                        Technical issue, business inquiry or a press request, please don't hesitate to get in contact with us！
                    </ContentUp>
                    <EmailUs>Email Us</EmailUs>
                    <GlobalLogo />
                </ContentWrapper>
            </SectionUp>

            <SectionDown>
                <ContentDown>Get to know us better</ContentDown>
                <LogoWrapper>
                    <Discord />
                    <Twitter />
                    <GitHub />
                </LogoWrapper>
            </SectionDown>
            <ButtomNavBar />
        </Section>
 
  )
}

export default ContactUs;