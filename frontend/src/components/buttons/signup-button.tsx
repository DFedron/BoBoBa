import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

const Button = styled.div`

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

export const SignupButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  /**
   * Using the Signup feature requires you to enable
   * the Auth0 New Universal Login Experience in your tenant.
   * Learn more: https://auth0.com/docs/universal-login/new-experience
   */
  return (
    
    <button
      className="button__sign-up"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }

      style={{ background: 'none', border: 'none'}}
    >
      <Button>
      Sign Up
      </Button>
    </button>
    
  );
};
