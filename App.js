import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello,  first app!</Text>
      <Text></Text>
      <Text>developed by Lucas</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter your name'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#1c1c1c',
    fontSize: 60
  },
  input: {
    height: 40,
    width: 160,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
