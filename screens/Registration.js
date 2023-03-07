import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { createUser, getFirebaseAuth } from "../Firebase";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";


export default function Registration({ navigation }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const auth = getFirebaseAuth();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (user) {
    
  } else {

    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.Inner}>
          <Image style={styles.image} source={require("../assets/BabyTrackerLogo2.png")} />

          <StatusBar style="auto" />

          <View style={styles.inputView}>

            <TextInput
              style={styles.TextInput}
              placeholder="Name"
              placeholderTextColor="#000000"
              onChangeText={setName}
              value={name}
            />
          </View>

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
              placeholder="Phone Number"
              placeholderTextColor="#000000"
              onChangeText={setPhone}
              value={phone}

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



          <TouchableOpacity style={styles.registerBtn}>
            <Button title="Register" color="black" style={styles.registerText} onPress={() => { createUserWithEmailAndPassword(email, password).then((token) => createUser(name, email, phone, token.user.uid)); }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerBtn}>
            <Button title="Create Baby (testing)" color="black" style={styles.registerText} onPress={() => { navigation.navigate("Create Baby"); }} />
          </TouchableOpacity>

        </View>
      </KeyboardAwareScrollView>
    );
  }

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
    marginLeft: 40,
  },


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
