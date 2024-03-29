import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './Components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList initialValues={['eat', 'sleep', 'soccer']}></ToDoList>
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
  },
});
