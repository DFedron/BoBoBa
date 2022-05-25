import React from 'react'
import styled from 'styled-components';
import logo from '../images/Logo.png';

import home from "../images/home.png"
import image from "../images/image.png"
import emails from "../images/emails.png"
import map from "../images/map.png"

import New from "../images/new.png"
import trending from "../images/trending.png"
const Section = styled.div`
  
  // width: 100%;
  background: rgba(253, 150, 143, 0.2);
  padding: 80px 60px;
  // background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }

`;

const Logo = styled.div`    
    background: url(${logo}) no-repeat;
    width: 264px;
    height: 264px;
    align-self: center;
    margin-top: 30px;
    background-size:cover;

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    display: grid;
    // max-width: 1000px;
    margin: 0 auto;
   
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(280px, 1fr));
  // grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  // @media (max-width: 1000px) {
  //   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  // }
`;

const Link = styled.a`
  font-family: 'Inria Serif';
  font-style: normal;
  font-weight: 520;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;

  color: #F98078;

  display: flex;
  margin-bottom: 20px;
  text-decoration: none;
  &:hover {
      color: #999;
      transition: 200ms ease-in;
  }
`;

const Title = styled.p`
  font-family: 'Inria Serif';
  font-style: italic;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;

  color: #F98078;

  margin-bottom: 30px;
  // font-weight: bold;
`;


const Home = styled.div`    
    background: url(${home}) no-repeat;
    width: 20px;
    height: 20px;
    background attachment fixed;
    background-size:cover;
    margin-right: 15px;

`;
const Image = styled.div`    
    background: url(${image}) no-repeat;
    width: 20px;
    height: 20px;
    background attachment fixed;
    background-size:cover;
    margin-right: 15px;

`;
const Emails = styled.div`    
    background: url(${emails}) no-repeat;
    width: 25px;
    height: 25px;
    background attachment fixed;
    background-size:cover;
    margin-right: 13px;
`;
const Map = styled.div`    
    background: url(${map}) no-repeat;
    width: 20px;
    height: 20px;
    background attachment fixed;
    background-size:cover;
    margin-right: 15px;
`;
const NEW = styled.div`    
    background: url(${New}) no-repeat;
    width: 20px;
    height: 20px;
    background attachment fixed;
    background-size:cover;
    margin-right: 15px;
`;

const Trending = styled.div`    
    background: url(${trending}) no-repeat;
    width: 20px;
    height: 20px;
    background attachment fixed;
    background-size:cover;
    margin-right: 15px;
`;

function ButtomNavBar() {
  return (
        <Section>

            <Wrapper>
            <Row>
              <Column>
                <Logo></Logo>
              </Column>

              <Column>
                  <Title>boboba.com</Title>
                  <Link href="/"><Home />Home</Link>
                  <Link href="/boba-map"><Map />Boba Map</Link>
                  <Link href="/image">< Image />Images</Link>
                  <Link href="/TestPage"><Trending />Trending</Link>
              </Column>

              <Column>
                  <Title>Resources</Title>
                  <Link href="/TestPage">Terms of Use</Link>
                  <Link href="/TestPage">EULA</Link>
                  <Link href="/TestPage">Privacy</Link>
                  <Link href="/TestPage">cooking Policy</Link>
              </Column>

              <Column>
              <Title>Contact </Title>
                  <Link href="/contact-us"><Emails />Connent Us</Link>
                  <Link href="/TestPage"><NEW />What New</Link>
              </Column>
              
            </Row>
            </Wrapper>
        </Section>
 
  )
}

export default ButtomNavBar;