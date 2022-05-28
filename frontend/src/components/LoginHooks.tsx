import React from 'react';
import { useGoogleLogin, UseGoogleLoginResponse } from 'react-google-login';

//refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

interface response {
  Ba: string;
  Ru: object;
  accessToken: string;
  googleId: string;
  profileObj: {
    email: string,
    familyName: string,
    givenName: string,
    googleId: string,
    imageUrl: string,
    name: string,
  };
  tokenId: string;
  tokenObj: object;
  zc: object;
}

function LoginHooks() {
  const onSuccess = (res: response) => {
    //console.log(res);

    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
     refreshTokenSetup(res);
  };

  const onFailure = (res: response) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default LoginHooks;