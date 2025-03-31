import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  const [selected, setSelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [reminderType, setReminderType] = useState('time'); // 'time' or 'pages'
  const [reminderValue, setReminderValue] = useState('');

  const handleDayPress = (day) => {
    setSelected(day.dateString);
    setModalVisible(true);
  };

  const saveReminder = () => {
    // Here you would save the reminder to your state/database
    console.log(`Saved ${reminderType} reminder for ${selected}: ${reminderValue}`);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reading Schedule</Text>
      
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selected]: { selected: true, selectedColor: '#3498db' },
          // You would add your scheduled days here with dots or custom styling
        }}
        theme={{
          selectedDayBackgroundColor: '#3498db',
          todayTextColor: '#3498db',
          arrowColor: '#3498db',
        }}
      />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Add Reading Reminder</Text>
            <Text>Date: {selected}</Text>
            
            <View style={styles.radioGroup}>
              <TouchableOpacity
                style={[styles.radioButton, reminderType === 'time' && styles.radioSelected]}
                onPress={() => setReminderType('time')}
              >
                <Text>Schedule Time</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.radioButton, reminderType === 'pages' && styles.radioSelected]}
                onPress={() => setReminderType('pages')}
              >
                <Text>Set Page Goal</Text>
              </TouchableOpacity>
            </View>
            
            <TextInput
              style={styles.input}
              placeholder={reminderType === 'time' ? "Minutes to read" : "Number of pages"}
              keyboardType="numeric"
              value={reminderValue}
              onChangeText={setReminderValue}
            />
            
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.button, styles.buttonSave]}
                onPress={saveReminder}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  radioButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  radioSelected: {
    backgroundColor: '#e6f7ff',
    borderColor: '#3498db',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    width: '45%',
  },
  buttonCancel: {
    backgroundColor: '#ddd',
  },
  buttonSave: {
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});