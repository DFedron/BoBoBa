import React  from 'react';
import styled from 'styled-components';
import background from '../images/blur-restaurant-interior.jpeg';
import RecentImage from './RecentImage';
import Trending from './Trending';
import ButtomNavBar from './FooterNavBar';
import { Link } from 'react-router-dom';

const Section = styled.section`
    background: url(${background}) no-repeat center center;
    height: 904px;
    display: grid;
    background attachment fixed;
    background-size:cover;
    grid-template-rows: repeat(5, 180px);
    padding-top: 125px;
    width: 100%;



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
`;


const ContentTwo = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    font-family: 'HanziPen TC';
    font-style: normal;
    font-weight: 400;
    font-size: 128px;
    line-height: 179px;

    letter-spacing: 0.1em;

    color: #F06C98;
`;
const Button = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    

    font-family: 'Irish Grover';
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 109px;

    letter-spacing: 0.13em;

    color: #F3683C;

    cursor: pointer;

    background: #FDF6F6;
    box-shadow: 10px 20px 3px 6px rgba(0, 0, 0, 0.64);
    border-radius: 61.5px;
    margin: auto;
    
    width: 44%;
    &:hover{
        background-color: #fff;
    }
`;






const Hellopage = () =>
{
    return(
        <div id = "Home">
            <Section>
                <ContentOne></ContentOne>
                <ContentOne>
                    Find The Best
                </ContentOne>
                <ContentTwo>
                    BoBoBa
                </ContentTwo>
                <Link to='/boba-map' style={{ textDecoration: 'none' }}>
                    <Button>
                        Gimme Boba!
                    </Button>                
                </Link>
            

            </Section>
                <RecentImage/>
                <Trending  />
                <ButtomNavBar /> 
        </div>


         )
};

export default Hellopage;