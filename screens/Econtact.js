import React, { useState, useContext} from 'react';
import themeContext from '../config/themeContext';
import { View, Text, TextInput, Button, Alert, FlatList  } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function EmergencyContactScreen({ navigation }) {
const theme = useContext(themeContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [relationship, setRelationship] = useState('Other');
  const [contacts, setContacts] = useState([]);

  const [editingContactIndex, setEditingContactIndex] = useState(-1);

  const handleSave = () => {
    if (!name || !phone) {
      Alert.alert('Error', 'Please enter a name and phone number.');
      return;
    }

    // Save the emergency contact to the list of contacts
    const newContact = { name, phone, relationship };
    setContacts([...contacts, newContact]);

    // Clear the input fields
    setName('');
    setPhone('');
    setRelationship('Other');

    Alert.alert('Success', 'Emergency contact saved!');
  };

  const handleDelete = (index) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this contact?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            // Remove the contact from the list of contacts
            const newContacts = [...contacts];
            newContacts.splice(index, 1);
            setContacts(newContacts);

            Alert.alert('Success', 'Contact deleted.');
          },
        },
      ]
    );
  };

  const handleEdit = (index) => {
    // Set the name, phone, and relationship state variables to the values of the contact being edited
    setName(contacts[index].name);
    setPhone(contacts[index].phone);
    setRelationship(contacts[index].relationship);

    // Set the editingContactIndex state variable to indicate that we're editing a contact
    setEditingContactIndex(index);
  };

  const handleUpdate = () => {
    if (!name || !phone) {
      Alert.alert('Error', 'Please enter a name and phone number.');
      return;
    }

    // Update the contact in the list of contacts
    const newContacts = [...contacts];
    newContacts[editingContactIndex] = { name, phone, relationship };
    setContacts(newContacts);

    // Clear the input fields and reset the editingContactIndex state variable
    setName('');
    setPhone('');
    setRelationship('Other');
    setEditingContactIndex(-1);

    Alert.alert('Success', 'Contact updated.');
  };

  const renderItem = ({ item, index }) => (
    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', color: theme.color }}>
      <View style={{ flex: 1, color: theme.color }}>
        <Text style={{ fontSize: 18, color: theme.color}}>{item.name}</Text>
        <Text style={{ color: theme.color}}>{item.phone}</Text>
        <Text style={{ fontStyle: 'italic', color: theme.color }}>Relationship: {item.relationship}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="Edit" onPress={() => handleEdit(index)} />
        <Button title="Delete" onPress={() => handleDelete(index)} />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
       
        <Text style={{ fontSize: 16, color: theme.color }}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter name"
          placeholderTextColor= "#698"
          style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5, color: theme.color }}
          />
  
          <Text style={{ marginTop: 10, fontSize: 16, color: theme.color }}>Phone Number:</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter phone number"
            placeholderTextColor= "#698"
            keyboardType="phone-pad"
            style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5, color: theme.color }}
          />
  
          <Text style={{ marginTop: 10, fontSize: 16, color: theme.color }}>Relationship:</Text>
          <Picker
            selectedValue={relationship}
            onValueChange={setRelationship}
            style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 1, color: theme.color }}
            itemStyle={{color: theme.color}}
          >
        
            <Picker.Item label="Mother" value="Mother" />
            <Picker.Item label="Father" value="Father" />
            <Picker.Item label="Sister" value="Sister" />
            <Picker.Item label="Brother" value="Brother" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
  
          {editingContactIndex === -1 ? (
            <Button title="Save" onPress={handleSave} />
          ) : (
            <Button title="Update" onPress={handleUpdate} />
          )}
        </View>
  

          <FlatList
          data={contacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          style={{ flex: 1, color: theme.color }}
          
          
        
          
          />



        
      </View>
    );
  }
  
