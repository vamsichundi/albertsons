import { MsalAuthProvider, LoginType } from 'react-aad-msal';

const config = {
    auth: {
        authority: 'https://login.microsoftonline.com/34ebfaaa-43f3-44fb-9030-22e1f8d3e714',
        clientId: '36acc8ce-4519-4b7b-9ffc-27f70a9b5367',
        redirectUri: 'http://localhost:3000/'
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};

// Authentication Parameters
const authenticationParameters = {
    scopes: [
        'user.read'
    ]
}

// Options
const options = {
    loginType: LoginType.Popup,
    tokenRefreshUri: window.location.origin + '/auth.html'
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)
