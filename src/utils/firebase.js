// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA25_7_FFJk9gvfTt_eqG-sR97XVRS8Qo8",
  authDomain: "netflixgpt007.firebaseapp.com",
  projectId: "netflixgpt007",
  storageBucket: "netflixgpt007.appspot.com",
  messagingSenderId: "509144345542",
  appId: "1:509144345542:web:aa48d19f6f42e04c4820c7",
  measurementId: "G-7Q3TD698L9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
