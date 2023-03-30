import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, OAuthProvider, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUEOL1TLDf0_3w-72v3H1T97PphjaAhAs",
    authDomain: "com-usfq-hubi.firebaseapp.com",
    databaseURL: "https://com-usfq-hubi-default-rtdb.firebaseio.com",
    projectId: "com-usfq-hubi",
    storageBucket: "com-usfq-hubi.appspot.com",
    messagingSenderId: "355513671445",
    appId: "1:355513671445:web:6511a657977e00f0a5531c",
    measurementId: "G-5JKSNDX6F3"
};

const provider = new OAuthProvider('microsoft.com');

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let firebaseUser = null;

export function getUser(){
    return firebaseUser;
}

export function getUserId(){
    if(firebaseUser === null){
        return null;
    }
    return firebaseUser.uid;
}

export function getUserEmail(){
    if(firebaseUser === null){
        return null;
    }
    return firebaseUser.email;
}

export function getUserDisplayName(){
    if(firebaseUser === null){
        return null;
    }
    return firebaseUser.displayName;
}

export async function checkSession(){

    onAuthStateChanged(auth, (user) => {
        if (user) {
          firebaseUser = user;
          console.log("email", user.email);
          console.log("displayName", user.displayName);
          console.log("phoneNumber", user.phoneNumber);
          console.log("photoURL", user.photoURL);
          console.log("uid", user.uid);
        } else {
          // User is signed out
          // ...
          firebaseUser = undefined;
          console.log("user is logged out");
          login();
        }
      });
}

async function login() {

    provider.setCustomParameters({
        // Force re-consent.
        prompt: 'consent',
        // Target specific email with login hint.
        tenant: '9f119962-8c62-431c-a8ef-e7e0a42d11fc'
    });
    
    provider.addScope('mail.read');

    await signInWithPopup(auth, provider)
        .then((result) => {
            // User is signed in.
            // IdP data available in result.additionalUserInfo.profile.

            // Get the OAuth access token and ID Token
            const credential = OAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            const idToken = credential.idToken;
            console.log(accessToken);
            console.log(idToken);
        })
        .catch((error) => {
            console.log(error);
        });
}

// export async function logout() {
//    await auth.signOut();
// }
