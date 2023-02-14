import React, { useState, useMemo, useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import themeContext from '../config/themeContext';

function CustomCalendar(props) {
  const theme = useContext(themeContext);
  const initDate = this.state;
  const [selected, setSelected] = useState(initDate);
  const marked = useMemo(() => ({
    [selected]: {
      selected: true,
      selectedColor: '#7DC265',
      selectedTextColor: 'white',
      
    }
  }), [selected]);
  return (
    <Calendar
      initialDate={initDate}
      markedDates={marked}
      onDayPress={(day) => {
        setSelected(day.dateString);
        props.onDaySelect && props.onDaySelect(day);
      }}
      {...props}
    />
  );
}
 
function HomeCalendar() {
  const theme = useContext(themeContext);
  return (
    <SafeAreaView style={styles.container}>
      <CustomCalendar onDaySelect={(day) => console.log(`Date selected: ${day.dateString}`)}/>
    </SafeAreaView>
    
  );
};



const styles = StyleSheet.create
( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
  

export default HomeCalendar;


