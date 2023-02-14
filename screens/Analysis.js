import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Analysis() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>My name is Guest</Text>
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
});
