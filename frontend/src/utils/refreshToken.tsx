import { useGoogleLogin, UseGoogleLoginResponse, GoogleLoginResponse, GoogleLoginResponseOffline} from 'react-google-login';

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
  tokenObj: {
    expires_in: number,
  }
  zc: object;
}

export const refreshTokenSetup = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log("Refresh: ", res);
  // Timing to renew access token
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log('newAuthRes:', newAuthRes);
    // saveUserToken(newAuthRes.access_token);  <-- save new token
    localStorage.setItem('authToken', newAuthRes.id_token);

    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };

  // Setup first refresh timer
  setTimeout(refreshToken, refreshTiming);
};