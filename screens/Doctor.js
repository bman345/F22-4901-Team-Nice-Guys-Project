import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, Text, View, Button, Icon, SafeAreaView, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native';

 

export default function TrackScreen({ navigation }) {

  const [currentDate, setcurrentDate] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [text, setText] = useState('Empty');
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [note, setNote] = useState('');
  const [noteOutput, setNoteOutput] = useState('');
  const [outputs, setOutputs] = useState([]);

 

  const handleNoteSubmit = () => {
    setOutputs([...outputs, note]);
    setNote('');
  };

 

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android'); //MIGHT NEED TO CHANGE FOR IOS
    setDate(currentDate);
  }

 

  const onChangeTime = (event, selectedTime) => {

    const currentTime = selectedTime || time;
    setShowTime(Platform.OS === 'android' ? false : undefined); // Set showTime to false on Android and undefined on iOS
    setMode('date'); // Reset the mode to 'date' after selecting the time
    if (event.type === 'set') { // Check if the user clicked "OK"
      setTime(currentTime);
      setSelectedTime(currentTime); // Update selectedTime state with the selected time
    }
  };

 

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

 

  const showTimepicker = () => {
    setShowTime(true);
    setMode('time');
  };

 

  useEffect(() => {
    const date = new Date().getDate(); // current date
    const month = new Date().getMonth() + 1; // current month
    const year = new Date().getFullYear(); // current year
    setcurrentDate(`${month}/${date}/${year}`);
  }, []);

 

  return (

    <KeyboardAvoidingView style={styles.container} behavior="height">     
      <Text style={styles.notetitle}>Notes:</Text>

    <TextInput
      style={styles.noteInput}
      placeholder="Enter notes"
      value={note}
      onChangeText={text => setNote(text)}

    />

    <TouchableOpacity style={styles.submitButton} onPress={handleNoteSubmit}>
      <Text style={styles.submitButtonText}>Submit</Text>
    </TouchableOpacity>
    {outputs.map((output, index) => (
  <Text key={index} style={styles.noteOutput}>Note {index + 1}: {output}</Text>

  ))}

      <Text style={styles.title}>Doctor Vist</Text>
      <View style={[styles.currentDateContainer, {top: -8}]}>
        <Text style={styles.currentDate}>{currentDate}</Text>
        <View style={styles.separator} />
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.selectTimeText}>Select Appoinment time:</Text>
        <TouchableOpacity style={styles.selectTimeButton} onPress={showTimepicker}>
          <Text style={styles.selectTimeButtonText}>Select Time</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Track Options')}>
        <View style={styles.exitbutton}>
          <Text style={styles.exitbuttonText}>Submit Information</Text>
        </View>

      </TouchableOpacity>
        {showTime && (
          <DateTimePicker
            testID="dateTimePicker"
            value={time}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeTime}
          />
        )}

        {selectedTime && (
         <Text style={styles.selectedTime}>{selectedTime.toLocaleTimeString()}</Text>
        )}

      </View>

 
      <StatusBar style="auto" />

    </KeyboardAvoidingView>
 

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

  timeContainer: {
    alignItems: 'center',
    marginTop: -430,
  },

  selectTimeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  selectTimeButton: {
    backgroundColor: '#FFBABA',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  selectTimeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,

  },

  selectedTime: {
    fontSize: 16,
    marginTop: 10,
  },

  selectedNumber: {
    fontSize: 16,
    marginTop: 0,
    left: 26,
  },

  noteInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    top: -200
  },

  notetitle: {
    top: -200,
    fontWeight: 'bold',
    fontSize: 16,
  },

  SubmitButton: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },

  submitButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    top: -200,
  },

  noteOutput: {
    top: -60
  },

  exitbuttonText:{
    top: 200,
    fontWeight: "bold"
  }
});
