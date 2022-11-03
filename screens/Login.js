import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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


export default function App() {

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

    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/BabyTrackerLogo2.png")} />


     
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
        <Button title="LOGIN" color="transparent" style={styles.loginText} onPress={() => signInWithEmailAndPassword(email, password)}/>
      </TouchableOpacity>

 

      <TouchableOpacity style={styles.registerBtn}>
        <Button title="REGISTER" color="transparent" style={styles.registerText}/>
      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#D2FFB7",
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
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
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
