import React, { FunctionComponent, useState } from 'react'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import Alert from './Alert';
import AlertType from './AlertType';

interface GoogleSignInComponentProps {
  loginSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
}

const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
  console.log(response);
}

export const GoogleSignInComponent: FunctionComponent<GoogleSignInComponentProps> = ({ loginSuccess }) => {

  const [loginFailed, setLoginFailed] = useState<boolean>();

  return (
    <div className="text-center mb-4">
      <p>Sign In</p>
      <GoogleLogin
        clientId= "195102482742-3g5n5ve5ia6ahdrfq5c24pri6toar86i.apps.googleusercontent.com"
        buttonText='Google'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        responseType='code,token'
      />
    </div>
  )
};