import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function RegistrationScreen() {
  
    return (
      <View style={styles.container}>
        <Text>This is the registration page</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D2FFB7',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });