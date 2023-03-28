import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";

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

export async function login(){
   
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
