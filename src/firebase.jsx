// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-9b479.firebaseapp.com",
  projectId: "store-tutorial-9b479",
  storageBucket: "store-tutorial-9b479.appspot.com",
  messagingSenderId: "759212774109",
  appId: "1:759212774109:web:16cd387ea8250350c60134"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();