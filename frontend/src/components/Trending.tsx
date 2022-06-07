import React from 'react'
import styled from 'styled-components';
// import ButtomNavBar from './FooterNavBar'
import boba from '../images/Boba.png';
import star from '../images/Star.png';

import boba2 from '../images/boba2.png';


import boba5 from '../images/boba5.png';
import boba6 from '../images/boba6.png';
import boba7 from '../images/boba7.png';



const Section = styled.div`
    // z-index: -1;
    padding-top: 125px;
    display: grid;
    // grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 2fr 2fr;
    height: 1000px;
`;



const TextWrapper = styled.div`

    height: 250px;

`;

const TextImage = styled.div`
    position: absolute;
    width: 150px;
    height: 100px;
    left: 75px;
    top: 149px;

    z-index: -1;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.06em;

    color: #F98078;
`;

const VerticalBreak = styled.div`
    position: absolute;
    z-index: -1;
    width: 8px;
    height: 120px;
    background: #F98078;
    left: 270px;
    top: 180px;

`;

const Break = styled.div`
    z-index: -1;
    position: absolute;
    width: 520px;
    height: 8px;
    left: 59px;
    top: 238px;
    background: #F98078;
`;

const Text = styled.div`
    position: absolute;
    width: 460px;
    height: 50px;
    left: 300px;
    top: 240px;

    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.06em;

    color: #F98078;
`;

const Boba = styled.div`    
    background: url(${boba}) no-repeat;
    width: 300px;
    height: 100px;
    margin-top: 20px;
    margin-left: 30px;
    background attachment fixed;
    background-size:cover;
    // background-size: 60% 60%;
    background-position: center center;
    // display: block;
    justify-content: 'center'
`;

const Star = styled.div`    
    background: url(${star}) repeat-x;
    width: 100px;
    height: 15px;
    margin-left: 20px;
    background attachment fixed;
    background-size:cover;
    background-size: 19.8px 17px;
    background-position: center center;
    // display: block;
`;


const ContentSection = styled.div`
    display: flex;
    justify-content: space-around;
    
`;

const Wrapper = styled.div`

    width: 340px;

`;


const Title  = styled.div`

    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.06em;

    color: #F98078;

`;

const ListWrapper = styled.div`

    display: block;
    margin-top: 30px;
`;

const ListUp = styled.div`
    
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;

    letter-spacing: 0.06em;

    color: #F98078;
`;

const ListDoow = styled.div`

    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.06em;
    justify-content: center;
    color: #F98078;
`;

function Trending() {

    const Users = [
        {
        id: '1.',
        name: 'User_123',
        followers: 'Followers: 12345',
        post: 'Post: 12345'
        },
        {
        id: '2.',
        name: 'User_123',
        followers: 'Followers: 12345',
        post: 'Post: 12345'
        },
        {
        id: '3.',
        name: 'User_123',
        followers: 'Followers: 12345',
        post: 'Post: 12345'
        },
        {
        id: '4.',
        name: 'User_123',
        followers: 'Followers: 12345',
        post: 'Post: 12345'
        },
        {
        id: '5.',
        name: 'User_123',
        followers: 'Followers: 12345',
        post: 'Post: 12345'
        },
    
    ];


  return (
        <Section>
            <TextWrapper>
                <TextImage>
                    Trandings
                </TextImage>
                <VerticalBreak />
                <Break />
                <Text>Find the most popular Boba</Text>
            </TextWrapper>
            <ContentSection>
                <Wrapper>
                    <Title>Top Stores</Title>
                    <Boba style={{backgroundImage: `url(${boba2})`}}/>
                    <p style={{justifyContent: 'center', display: 'flex', fontWeight: '600'}}>Store1 <Star /></p>
                    <Boba style={{backgroundImage: `url(${boba5})`}}/>
                    <p style={{justifyContent: 'center', display: 'flex', fontWeight: '600'}}>Store1 <Star /></p>
                    <Boba style={{backgroundImage: `url(${boba7})`}}/>
                    <p style={{justifyContent: 'center', display: 'flex', fontWeight: '600'}}>Store1 <Star /></p>
                    <Boba style={{backgroundImage: `url(${boba6})`}}/>
                    <p style={{justifyContent: 'center', display: 'flex', fontWeight: '600'}}>Store1 <Star /></p>
                </Wrapper>
                <Wrapper>
                    <Title>Top Users</Title>
                    
                    <ul style={{listStyle: 'none'}}>

                    {Users.map((item, index) => {
                    return (
                       <ListWrapper>
                        <li key={index}>  
                        
                            <ListUp>      
                                <span >{item.id}</span>
                                <span>{item.name}</span>
                            </ListUp>
                            <ListDoow>
                                <p>{item.followers}  <span>{item.post}</span></p>
                            </ListDoow>
                        </li>
                        </ListWrapper>
                    );
                    })}
                
                    </ul>
                    
            
                </Wrapper>
            </ContentSection>
        </Section>


  )
}

export default Trending;