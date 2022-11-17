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


export default function CreateBaby() {

  const [birthday, SetBirthday] = useState("");
  const [weight, SetWeight] = useState("");
  const [height, setHeight] = useState("");
  const [name, SetBabyName] = useState("");
  const [gender, SetGender] = useState("");

  return (

    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.Inner}>
        <Image style={styles.image} source={require("../assets/BabyTrackerLogo2.png")} />

        <StatusBar style="auto" />


        <View style={styles.inputView}>
          
          <TextInput
            style={styles.TextInput}
            placeholder="Baby Name"
            placeholderTextColor="#000000"
            onChangeText={SetBabyName}
            value={name}

          />

        </View>

        <View style={styles.inputView}>

          <TextInput

            style={styles.TextInput}
            placeholder="Birthday"
            placeholderTextColor="#000000"
            onChangeText={SetBirthday}
            value={birthday}

          />
        </View>

        <View style={styles.inputView}>

          <TextInput

            style={styles.TextInput}
            placeholder="Weight"
            placeholderTextColor="#000000"
            onChangeText={SetWeight}
            value={weight}

          />
        </View>

        <View style={styles.inputView}>

          <TextInput

            style={styles.TextInput}
            placeholder="Height"
            placeholderTextColor="#000000"
            onChangeText={setHeight}
            value={height}

          />
        </View>

        <View style={styles.inputView}>

          <TextInput

            style={styles.TextInput}
            placeholder="Gender"
            placeholderTextColor="#000000"
            onChangeText={SetGender}
            value={gender}

          />
        </View>

        


        <TouchableOpacity style={styles.loginBtn}>
          <Button title="Add Baby" color="#000000" style={styles.loginText}/>
        </TouchableOpacity>




      </View>
    </KeyboardAwareScrollView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
