import { StatusBar } from 'expo-status-bar';
import { getFirebaseAuth, getReference } from '../Firebase';
import { StyleSheet, Text, View, Button, Icon, SafeAreaView, TouchableOpacity, Pressable, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TrackScreen({ navigation }) {

const [currentDate, setcurrentDate] = useState('');

 

useEffect(() => {
const date = new Date().getDate(); // current date
const month = new Date().getMonth() + 1; // current month
const year = new Date().getFullYear(); // current year
setcurrentDate(`${month}/${date}/${year}`);
}, []);

  const auth = getFirebaseAuth();
  
  return (
    <View style={styles.container}>
   
      <Text style={styles.title}>Today's Date</Text>
      <View style={[styles.currentDateContainer, {top: -8}]}>
        <Text style={styles.currentDate}>{currentDate}</Text>
        <View style={styles.separator} />
      </View>

      
      <TouchableOpacity onPress={() => navigation.navigate("Feedings")}>
        <View style={styles.feedingContainer}>
          <Text style={styles.feedingText}>Feeding</Text>
        </View>
      </TouchableOpacity>

 
      <TouchableOpacity onPress={() => navigation.navigate('Diapers')}>
        <View style={styles.diaperContainer}>
          <Text style={styles.diaperText}>Diaper</Text>
         </View>
      </TouchableOpacity>

 

      <TouchableOpacity onPress={() => navigation.navigate('Sleeps')}>
        <View style={styles.sleepContainer}>
          <Text style={styles.sleepText}>Sleep</Text>
         </View>
      </TouchableOpacity>
 

      <TouchableOpacity onPress={() => navigation.navigate('Doc')}>
        <View style={styles.doctorContainer}>
          <Text style={styles.doctorText}>Doctor Vists</Text>
         </View>
      </TouchableOpacity>

 

      <TouchableOpacity onPress={() => navigation.navigate('Meds')}>
        <View style={styles.medicationContainer}>
          <Text style={styles.medicationText}>Medication</Text>
         </View>
      </TouchableOpacity>
 
      <StatusBar style="auto" />

    </View>
  );
}

 

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  topBackground: {
    flex: 1,
  },

  bottomBackground: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },

  title: {
    position: 'absolute',
    fontSize: 20,
    top: 40,
  },

  currentDateContainer: {
    position: 'absolute',
    alignItems: 'center',
    marginTop: 75,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },

  currentDate: {
    fontSize: 16,
    color: '#333',
  },

  separator: {
    width:  300,
    height: 1,
    backgroundColor: '#333',
    marginTop: 5,
  },

  icon: {
    right: -142,
    top: -240,
  },

  feedingContainer: {
    position: 'absolute',
    backgroundColor: '#E2CBFF',
    padding: 10,
    width: 300,
    borderRadius: 5,
    marginTop: -250,
    right: -150,
  },

  feedingText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  diaperContainer: {
    position: 'absolute',
    backgroundColor: '#C7EDFF',
    padding: 10,
    width: 300,
    borderRadius: 5,
    marginTop: -190,
    right: -150,
  },

  diaperText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  sleepContainer: {
    position: 'absolute',
    backgroundColor: '#BAEBD9',
    padding: 10,
    width: 300,
    borderRadius: 5,
    marginTop: -130,
    right: -150,
  },

  sleepText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  doctorContainer: {
    position: 'absolute',
    backgroundColor: '#FFBABA',
    padding: 10,
    width: 300,
    borderRadius: 5,
    marginTop:-70,
    right: -150,
  },

  doctorText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  medicationContainer: {
    position: 'absolute',
    backgroundColor: '#7DC265',
    padding: 10,
    width: 300,
    borderRadius: 5,
    marginTop: -10,
    right: -150,
  },

  medicationText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
 
