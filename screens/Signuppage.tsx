import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
  
const Signuppage = () => {
  const navigation=useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Sign Up</Text>
      <Image
        source={require('../assets/plant.jpeg')}
        style={styles.logo}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
    title: {
      marginTop:100,
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '90%', 
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    button: {
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 10,
      width: '90%', 
      height: 40,
      backgroundColor: '#2b4829',
      alignItems: 'center', 
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    logo: {
      width: 150,
      height: 150,
      marginTop: 20,
    },
  });
  

export default Signuppage;
