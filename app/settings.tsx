import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [reminderTime, setReminderTime] = useState('19:00');
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#ddd', true: '#3498db' }}
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Enable Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#ddd', true: '#3498db' }}
          />
        </View>
        
        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Default Reminder Time</Text>
          <View style={styles.settingValue}>
            <Text>{reminderTime}</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reading Goals</Text>
        
        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Daily Reading Goal</Text>
          <View style={styles.settingValue}>
            <Text>30 minutes</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Weekly Page Goal</Text>
          <View style={styles.settingValue}>
            <Text>150 pages</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        
        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Version</Text>
          <Text style={styles.settingValueText}>1.0.0</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#3498db',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLabel: {
    fontSize: 16,
  },
  settingValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValueText: {
    color: '#666',
  },
});