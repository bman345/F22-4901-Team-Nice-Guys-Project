import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SelectList } from "react-native-dropdown-select-list";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getFirebaseAuth, createBaby } from "../Firebase";
import themeContext from '../config/themeContext';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";

function validateBaby(birthday, weight, height, name, gender, user_data, navigation) {
  createBaby(user_data, {
    birthday: birthday, 
    weight: weight,
    height: height,
    name: name,
    gender: gender
  });

  navigation.goBack();
}


export default function CreateBaby({ navigation, route }) {

  
  const user_data = route.params.user_data;
  const [birthday, SetBirthday] = useState("");
  const [weight, SetWeight] = useState("");
  const [height, setHeight] = useState("");
  const [name, SetBabyName] = useState("");
  const [gender, SetGender] = useState("genders");
  //used for list to pick gender for baby
  const genders = [
   {key: '1', value: 'Male'},
   {key: '2', value: 'Female'},
  ]
  

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

        <View style = {styles.inputView}>
          <SelectList
            setSelected={(val) => SetGender(val)}
            data={genders}
            save="value"
            placeholder="Gender"
            maxHeight={100}
            boxStyles={styles.dropdown}
          />

        </View>

        


        <TouchableOpacity style={styles.loginBtn}>
          <Button title="Add Baby" color="#000000" style={styles.loginText} onPress={() => {validateBaby(birthday, weight, height, name, gender, user_data, navigation)}}/>
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
    height: 150,
    width: 200,
    marginBottom: 40,
    marginLeft:30,
  },



  inputView: {
    backgroundColor: "#7DC265",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 12,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 5,
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
    marginTop: 80,
    backgroundColor: "#82A16E",
  },

  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#7DC265",
  },

  dropdown:{
    width: 270,
    borderColor: "#ffffff00",
  },

});




