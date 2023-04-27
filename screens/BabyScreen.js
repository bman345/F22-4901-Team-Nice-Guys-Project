import React, { useState, useMemo, useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import themeContext from '../config/themeContext';


 
export default function BabyScreen() {
  
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
};



const styles = StyleSheet.create
( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  




