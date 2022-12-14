import React from 'react';
import styled from 'styled-components';
import tapioca from '../images/tapioca.png'
import menu from '../images/menu.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarDataPart1, SidebarDataPart3, SidebarDataPart4 } from './SideMenuOptions';
import { AuthenticationButton } from './buttons/authentication-button';
// import { NavBarTab } from "./navigation/nav-bar-tab";

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

    @media (max-width: 1440px) {
        margin: 30px 10px;
        width: 90px;
        height: 80px;

      }

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

    @media (max-width: 1440px) {
        margin-top: 40px;
        margin-left: 25px;
        width: 60px;
        height: 60px;

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

    @media (max-width: 1440px) {
        width: 200px;
        font-size: 45px;

      }
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

    @media (max-width: 1440px) {
        margin-top: 40px;
        height: 70px;

      }
`;


export const Navbar: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);


    }
    return (
        <NavbarContainer>

            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <Menu onClick={showSidebar} />
                </Link>
            </div>

            {/* <div className="nav-bar__tabs">
                <NavBarTab path="/profile" label="Profile" />
            </div> */}

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
            <ButtonContainer>
                <div className="nav-bar__buttons">
                   
                        <AuthenticationButton />
                    
                </div>
            </ButtonContainer>
        </NavbarContainer>
    )
};

export default Navbar;