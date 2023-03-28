export const msalConfig = {
    auth: {
      clientId: "ea03554e-fdb9-45b8-9b84-14e619e3424e",
      authority: "https://login.microsoftonline.com/6ee45349-bb9a-4152-a01d-ccba9a020f21", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "https://com-usfq-hubi.firebaseapp.com/__/auth/handler",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
  };