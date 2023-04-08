import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { getFirebaseAuth, getReference } from '../Firebase';


export default function Track() {

  const auth = getFirebaseAuth();
  return (
    <View style={styles.container}>
      <Pressable style={styles.Button2} onPress={() => auth.signOut()}>
        <Text style={styles.Text}>Log out</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4628',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Button2: {
    padding: 10,
    backgroundColor: '#82A16E',
    width: 294,
    height: 64,
    borderRadius: 6,
    marginBottom: 25,
    marginTop: 25,
},

  Text: {
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
 
