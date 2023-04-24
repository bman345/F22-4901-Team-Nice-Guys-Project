
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';
import FeedingAnalysis from './FeedingAnalysis';

const SubScreens = [
  { label: 'Feedings', value: 'feeding-analysis' },
  { label: "placeholder", value: 'placeholder' }
];

export default function Analysis() {
  const [selectedScreen, setSelectedScreen] = useState('feeding-analysis');

  const renderScreen = () => {
    switch (selectedScreen) {
      case 'feeding-analysis':
        return <FeedingAnalysis />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Dropdown
        label="Select a screen"
        data={SubScreens}

        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Select Analysis"}
        onChange={item => {
          setSelectedScreen(item.value);
        }}
      />
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#4628',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});

