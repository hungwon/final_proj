// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf0-7Fft-UqDIEr5w81N3XXcq7izLpijI",
  authDomain: "foodguesser-fda0f.firebaseapp.com",
  projectId: "foodguesser-fda0f",
  storageBucket: "foodguesser-fda0f.appspot.com",
  messagingSenderId: "489607348528",
  appId: "1:489607348528:web:33cd009803afd9af7588f5",
  measurementId: "G-3SD86N7BVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAuth(app);
const provider = new GoogleAuthProvider();

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });