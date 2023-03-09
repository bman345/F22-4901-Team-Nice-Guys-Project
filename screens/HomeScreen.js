import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';


export default function HomeScreen({ navigation }) {
  
  console.log("This is the home screen");
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/BabyTrackerLogo2.png")}/>
        <Pressable style={styles.Button1} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.Text}>Login</Text>
        </Pressable>
        <Pressable style={styles.Button2} onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.Text}>Registration</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D2FFB7',
    },

    Title:{
      fontSize:60,
      fontWeight: 'bold',
    },

    Button1:{
      padding: 10,
      backgroundColor:'#7DC265',
      width:294,
      height:64,
      borderRadius:6,
      marginBottom:25,
      marginTop:40,
    },

    image: {
      height: 200,
      width: 200,
      marginBottom: 40,
      marginLeft:40,
    },
  

    Button2:{
      padding: 10,
      backgroundColor:'#82A16E',
      width:294,
      height:64,
      borderRadius:6,
      marginBottom:25,
      marginTop:25,
    },

    Text:{
      fontSize: 35,
      textAlign:'center',
      textAlignVertical:'center',
    },
  });