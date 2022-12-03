// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBsK6yE3SPZG5pArdqWyuuzV5gsLK_wTdQ",
  authDomain: "authentication-fire-85142.firebaseapp.com",
  projectId: "authentication-fire-85142",
  storageBucket: "authentication-fire-85142.appspot.com",
  messagingSenderId: "480723890403",
  appId: "1:480723890403:web:ed1e7815e88963f80755d6",
  measurementId: "G-CSX8NKZN5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth();
export {app, auth};
