import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function HomeScreen({ navigation }) {
  
    return (
      <View style={styles.container}>
        <Button title= "Press this button to go to login page"
        onPress={() => navigation.navigate("Login")}
        />
        <Button title= "Press this button to go to Registration page"
        onPress={() => navigation.navigate("Registration")}
        />
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D2FFB7',
    },
  });