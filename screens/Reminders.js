import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import themeContext from '../config/themeContext';

export default function Reminders({navigation, route}) {
  const theme = useContext(themeContext);
  const user_account = route.params.user_account;
  const [notes, setNotes] = useState(user_account.getReminders());
  const [noteText, setNoteText] = useState('');
  
 console.log(notes)
  const addNote = () => {
    if (noteText.length > 0) {
      const newNotes = [...notes, { text: noteText, date: Date.now() }];
      setNotes(newNotes);
      setNoteText('');

      user_account.setReminderData(newNotes);
      user_account.updateDatabase();

      console.log("update", user_account)
    }
  };

  const removeNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    user_account.setReminderData(newNotes);
    user_account.updateDatabase();

    
  };

  return (
    <View style={[styles.profile, { backgroundColor: theme.background }]}>
      <TextInput
        style={[styles.input, { color: theme.color}]}
        placeholder="Write a note"
        placeholderTextColor= "#698"
        value={noteText}
        onChangeText={(text) => setNoteText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => addNote()}>
        <Text style={[styles.buttonText, { color: theme.color }]}>Add Note</Text>
      </TouchableOpacity>
      <ScrollView style={styles.notesContainer}>
        {notes.map((note, index) => (
          <View
            key={index}
            style={[
              styles.note,
              { backgroundColor: `hsl(${index * 50}, 70%, 80%)` },
            ]}
          >
            <Text style={[styles.noteText, { color: theme.color }]}>
              {note.text}
            </Text>
            <Text style={[styles.dateText, { color: theme.color }]}>
              {new Date(note.date).toDateString()}
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeNote(index)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4628',
    padding: 10,
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  notesContainer: {
    width: '100%',
  },
  note: {
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteText: {
    fontSize: 16,
    flex: 1,
  },
  dateText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 10,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#f00',
    padding: 5,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
