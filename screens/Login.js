import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getFirebaseAuth } from "../Firebase";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";


export default function Login() {

  const fb_auth = getFirebaseAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(fb_auth);

  return (

    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.Inner}>
        <Image style={styles.image} source={require("../assets/BabyTrackerLogo2.png")}/>


     
        <StatusBar style="auto" />

        <View style={styles.inputView}>

          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#000000"
            onChangeText={setEmail}
            value={email}

          />

        </View>

        <View style={styles.inputView}>

          <TextInput

            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#000000"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}

          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Button title="LOGIN" color="Black" style={styles.loginText} onPress={() => signInWithEmailAndPassword(email, password)}/>
        </TouchableOpacity>



      </View>
    </KeyboardAwareScrollView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#D2FFB7",
  },

  Inner: {
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 200,
    width: 200,
    marginBottom: 40,
    marginLeft:40,
  },

/*
  imageLetter: {
    height: 200,
    width: 200,
    top: -100,
  },
*/

  inputView: {
    backgroundColor: "#7DC265",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
   flex: 1,
    padding: 10,
    marginLeft: 20,
    textAlign: "center"
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    textAlign: 'center'
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#82A16E",
  },

  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#7DC265",
  },

 

});
