
import home from "../images/home.png"
import image from "../images/image.png"
import emails from "../images/emails.png"
import map from "../images/map.png"

import New from "../images/new.png"
import qa from "../images/qa.png"
import signIn from "../images/sign-in.png"
import trending from "../images/trending.png"
import user from "../images/user.png"
import styled from 'styled-components';

const Home = styled.div`    
    background: url(${home}) no-repeat;
    width: 23px;
    height: 23px;
    background attachment fixed;
    background-size:cover;

`;
const Image = styled.div`    
    background: url(${image}) no-repeat;
    width: 23px;
    height: 23px;
    background attachment fixed;
    background-size:cover;

`;
const Emails = styled.div`    
    background: url(${emails}) no-repeat;
    width: 23px;
    height: 23px;
    background attachment fixed;
    background-size:cover;

`;
const Map = styled.div`    
    background: url(${map}) no-repeat;
    width: 23px;
    height: 23px;
    background attachment fixed;
    background-size:cover;

`;
const NEW = styled.div`    
    background: url(${New}) no-repeat;
    width: 23px;
    height: 23px;
    background attachment fixed;
    background-size:cover;

`;
const QA = styled.div`    
    background: url(${qa}) no-repeat;
    width: 23px;
    height: 23px;
    background attachment fixed;
    background-size:cover;

`;
const SignIn = styled.div`    
    background: url(${signIn}) no-repeat;
    width: 23px;
    height: 23px;
    background attachment fixed;
    background-size:cover;

`;
const Trending = styled.div`    
    background: url(${trending}) no-repeat;
    width: 23px;
    height: 23px;
    background attachment fixed;
    background-size:cover;

`;
const Users = styled.div`    
    background: url(${user}) no-repeat;
    width: 23px;
    height: 23px;
    background attachment fixed;
    background-size:cover;

`;


export const SidebarDataPart1 = [
    {
      title: 'Home',
      path: '/',
      icon: <Home />,
      cName: 'nav-text'
    },
    {
      title: 'Boba Map',
      path: '/boba-map',
      icon: <Map />,
      cName: 'nav-text'
    },
    {
      title: 'Images',
      path: '/TestPage',
      icon: <Image />,
      cName: 'nav-text'
    },
    {
      title: 'Trending',
      path: '/TestPage',
      icon: <Trending />,
      cName: 'nav-text'
    },
 
  ];



  export const SidebarDataPart2 = [
    {
      title: 'Sign In',
      path: '/SignIn',
      icon: <SignIn />,
      cName: 'nav-text'
    },
    {
      title: 'Account',
      path: '/SignUp',
      icon: <Users />,
      cName: 'nav-text'
    },


  ];


  export const SidebarDataPart3 = [
    {
      title: 'Connect Us',
      path: '/TestPage',
      icon: <Emails />,
      cName: 'nav-text'
    },
    {
      title: 'What New',
      path: '/TestPage',
      icon: <NEW />,
      cName: 'nav-text'
    },
  ];


  export const SidebarDataPart4 = [
    
    {
      title: 'Q&A',
      path: '/TestPage',
      icon: <QA />,
      cName: 'nav-text'
    }
  ];