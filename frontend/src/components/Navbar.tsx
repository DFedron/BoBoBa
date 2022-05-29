import React from 'react';
import styled from 'styled-components';
import tapioca from '../images/tapioca.png'
import menu from '../images/menu.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarDataPart1, SidebarDataPart2, SidebarDataPart3, SidebarDataPart4 } from './SideMenuOptions';
import { AuthenticationButton } from "./buttons/authentication-button";
import { Auth0Provider } from '@auth0/auth0-react';

import '../styles/Navbar.css';


const NavbarContainer = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    // background: rgba(253, 150, 143, 0.2);
    background: #ffe4e1;
    position: fixed;
    z-index: 100;
`;

const Logo = styled.div`    
    background: url(${tapioca}) no-repeat;

    width: 130px;
    height: 120px;
    margin: 0px 25px;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    cursor: pointer;
    background-size:cover;

`;


const Menu = styled.div`    
    background: url(${menu}) no-repeat;
    width: 80px;
    height: 80px;
    margin-top: 25px;
    margin-left: 35px;
    // padding: 10px;
    background attachment fixed;
    background-position: center center;
    background-size: 60% 60%;
    cursor: pointer;
    border-radius: 40px;
    &:hover{
        background-color: rgba(253, 150, 143, 0.4);
    }

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

    &:hover{
        color: rgba(253, 150, 143, 1);
    }
`;

// const ButtonMyAccount = styled.div`

//     display: flex;
//     width: 233px;
//     height: 60px;
//     cursor: pointer;

//     font-family: 'Inria Serif';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 36px;
//     line-height: 43px;

//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     align-self: center;
//     letter-spacing: 0.06em;

//     color: #FFFFFF;

//     mix-blend-mode: normal;

//     background: #F98078;
//     mix-blend-mode: multiply;
//     opacity: 0.6;
//     box-shadow: 6px 7px 6px 2px rgba(0, 0, 0, 0.5);
//     border-radius: 35px;
// `;

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

const Break = styled.div`
    background: rgba(249, 128, 120, 0.5);
    width: 300px;
    height: 7px;
    margin: 5px 5px;
`;

const VerticalBreak = styled.div`
    background: rgba(249, 128, 120, 0.5);
    width: 3px;
    height: 80px;
    margin-left: 10px;
    margin-top: 30px;
`;


export const Navbar: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
        // if(sidebar === false){
        //     if (typeof window != 'undefined' && window.document) {
        //         document.body.style.overflow = 'hidden';
        //         // let elem = document.getElementById("Home");
        //         // console.log(elem);

        //         // if(elem){

        //         //     elem.style.cssText = styles;

        //         // }
        //     }
        // }
        // else{
        //     document.body.style.overflow = 'unset';
        //     // let elem = document.getElementById("Home");
        //     // if(elem){
        //     //     elem.style.opacity = "1";
        //     // }
        // }

    }
    return (

        <Auth0Provider
            domain="YOUR_AUTH0_DOMAIN"
            clientId="YOUR_AUTH0_CLIENT_ID"
            redirectUri={window.location.origin}
        >


            <NavbarContainer>

                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <Menu onClick={showSidebar} />
                    </Link>
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>

                        {SidebarDataPart1.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}

                        <Break />
                        {SidebarDataPart2.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}

                        <Break />
                        {SidebarDataPart3.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}

                        <Break />
                        {SidebarDataPart4.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Logo ></Logo>
                </Link>
                <VerticalBreak />
                <Title>Boboba</Title>
                <div>
                    <AuthenticationButton />
                </div>
            </NavbarContainer>

        </Auth0Provider>

    )
};

export default Navbar;