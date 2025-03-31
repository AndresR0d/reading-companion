import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Reminder_Card from './components/reminder_card';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reading Companion</Text>
      <Text style={styles.subtitle}>Track your reading goals and schedule</Text>
      <StatusBar style="auto" />
      <Reminder_Card/>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});