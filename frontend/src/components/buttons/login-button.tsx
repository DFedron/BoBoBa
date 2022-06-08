import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
    display: flex;
   
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

    @media (max-width: 1440px) {
      width: 130px;
      margin-top: 20px;
      font-size: 30px;

    }
`;


export const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    
      <button className="button__login" onClick={() => loginWithRedirect()} style={{ background: 'none', border: 'none'}}>
        <Button>
          Log In
        </Button>
      </button>
    
  );
};
