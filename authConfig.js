export const msalConfig = {
    auth: {
        clientId: process.env.REACT_APP_AZURE_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT_ID}`,
        redirectUri: process.env.REACT_APP_AZURE_REDIRECT_URI,
    },
    cache: {
        cacheLocation: "sessionStorage", // Can be "localStorage" or "sessionStorage"
        storeAuthStateInCookie: false, // Set to true if you experience issues on IE11 or Edge
    }
};
