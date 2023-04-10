// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { onValue, get, getDatabase, ref, set, push, remove } from 'firebase/database';
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
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

const firebase_app = initializeApp(firebaseConfig);
//rsetPersistence(getFirebaseAuth(), browserLocalPersistence);

// Initialize Firebase
function getFirebaseApp() {
  return firebase_app;
}

function getFirebaseAuth() {
  return getAuth(firebase_app);
}

function getReference(key) {
  return ref(getDatabase(firebase_app), key);
}

function getUserData(uid) {
  const data = getReference(`users/${uid}`);

}

function createUser(name, email, phone, uid) {
  set(getReference('accounts/' + uid), {
    babydata: [],
    username: name,
    email: email,
    phone: phone
  });
}

function updateUserData(user_account) {
  set(getReference('accounts/' + user_account.uid), user_account.data);
}

function createBaby(user_data, baby_data) {
  push(getReference(`accounts/${user_data.uid}/baby_data/`), baby_data);
}


export { getFirebaseApp, getFirebaseAuth, getReference, createUser, createBaby, updateUserData };