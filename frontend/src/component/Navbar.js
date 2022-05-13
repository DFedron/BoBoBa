import React  from 'react';
import styled from 'styled-components';
import logo from '../images/Logo.png';
import menu from '../images/menu.png';


const NavbarContainer = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    background: rgba(253, 150, 143, 0.2);
`;

const Logo = styled.div`    
    background: url(${logo}) no-repeat;

    width: 120px;
    height: 120px;
    margin: 0px 15px;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;

    background-size:cover;

`;

const Menu = styled.div`    
    background: url(${menu}) no-repeat;

    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    margin: 0px 15px;
    background attachment fixed;
    background-size:cover;
    cursor: pointer;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    text-align: center;
    align-self: center;
    margin-left: auto;
    padding: 0px 20px;

`;
const ButtonSignIn = styled.div`
    display: flex;
    padding-top: 12px;
    width: 160px;
    height: 59px;
    cursor: pointer;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;

    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    letter-spacing: 0.06em;

    color: #F98078;
`;

const ButtonMyAccount = styled.div`

    display: flex;
    width: 233px;
    height: 60px;
    cursor: pointer;

    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;

    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    letter-spacing: 0.06em;
    
    color: #FFFFFF;
    
    mix-blend-mode: normal;

    background: #F98078;
    mix-blend-mode: multiply;
    opacity: 0.6;
    box-shadow: 6px 7px 6px 2px rgba(0, 0, 0, 0.5);
    border-radius: 35px;
`;

const Title = styled.div`

    width: 300px;
    height: 77px;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: end;

    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;

    letter-spacing: 0.06em;

    color: #F98078;
`;

const Navbar=()=>
{
    return(
        <NavbarContainer>
            
            <Menu></Menu>
            <Logo></Logo>
            <Title>Boboba</Title>
            <ButtonContainer>
                <ButtonSignIn>Sign In</ButtonSignIn> 
                <ButtonMyAccount>MyAccount</ButtonMyAccount>
            </ButtonContainer>
        </NavbarContainer>
         )
};

export default Navbar;