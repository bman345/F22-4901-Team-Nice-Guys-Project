// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFGvWstvoD-WJdSXq6x4fampsl2mykWlo",
  authDomain: "baby-tracker-eba69.firebaseapp.com",
  projectId: "baby-tracker-eba69",
  storageBucket: "baby-tracker-eba69.appspot.com",
  messagingSenderId: "50068854838",
  appId: "1:50068854838:web:3bf3b3275488a85deb2097",
  measurementId: "G-PFKDQESW2F"
};

const firebase_app = initializeApp(firebaseConfig);;

// Initialize Firebase
function getFirebaseApp() {
  return firebase_app;
}

function getFirebaseAuth() {
  return getAuth(firebase_app);
}

export {getFirebaseApp, getFirebaseAuth};