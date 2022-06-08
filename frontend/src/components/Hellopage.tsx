import React from 'react';
import styled from 'styled-components';
import background from '../images/blur-restaurant-interior.jpeg';

import RecentImage from './RecentImage';
import Popular from './Popular';
import ButtomNavBar from './FooterNavBar';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Section = styled.section`
    background: url(${background}) no-repeat center center;


    display: grid;
    background attachment fixed;
    background-size:cover;
    grid-template-rows: repeat(5, 180px);
    padding-top: 125px;
    width: 100%;

    @media (max-width: 1440px) {
        grid-template-rows: repeat(5, 125px);
      }

`;


const ContentOne = styled.div`

    margin-buttom: 0px;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    font-family: 'HanziPen TC';
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 134px;

    letter-spacing: 0.1em;
    color: #FD968F;

    @media (max-width: 1440px) {
        font-size: 65px;

      }

`;


const ContentTwo = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    
    font-family: 'HanziPen TC';
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 90px;

    letter-spacing: 0.1em;

    color: #F06C98;

    @media (max-width: 1440px) {
        font-size: 37px;
        line-height: 65px;
        margin-left: 10%;
        margin-right: 10%
      }
`;
const Button = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    

    font-family: 'Irish Grover';
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    line-height: 109px;

    letter-spacing: 0.13em;

    color: #F3683C;

    cursor: pointer;

    background: #FDF6F6;
    box-shadow: 10px 20px 3px 6px rgba(0, 0, 0, 0.64);
    border-radius: 61.5px;
    margin: auto;
    padding: 0 30px;
    width: fit-content;
    &:hover{
        background-color: #fff;
    }

    @media (max-width: 1440px) {
        font-size: 45px;
        line-height: 80px;

      }
`;

const Hellopage = () => {
    const { isAuthenticated, user } = useAuth0();

    if (isAuthenticated && user) {
        console.log(user);

        const data = {
            name: user.nickname,
            email: user.email,
        }

        fetch("http://localhost:8080/get_user", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
            method: "POST",
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div id="Home">
            <Section>
                <ContentOne></ContentOne>
                <ContentOne>
                    Drink only the Best
                </ContentOne>
                <ContentTwo>
                    Find the best local bubble tea stores near you with one click of a button.
                </ContentTwo>
                <Button>
                    <Link to='/boba-map' style={{ textDecoration: 'none', color: "#F3683C" }}>
                        It's Boba Time!
                    </Link>
                </Button>


            </Section>
            <RecentImage />
            <Popular />
            <ButtomNavBar />
        </div>


    )
};

export default Hellopage;