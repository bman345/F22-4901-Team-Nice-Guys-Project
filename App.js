import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text> {app.name} Firebase Initialized...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
