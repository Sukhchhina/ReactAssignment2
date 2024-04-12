import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Loginpage = () => {
  const navigation=useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const gotohome = () => {
  const mockUser = {
    email: 'reactblackcaps@gmail.com',
    password: 'react123',
  };

if (email === mockUser.email && password === mockUser.password) {
    navigation.navigate('Home');
  }
};

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login here</Text>
      <Image
        source={require('../assets/plant.jpeg')}
        style={styles.logo}
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
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      
      <TouchableOpacity style={styles.button} onPress={gotohome}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   //justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 100,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2b4829',
    width: '100%',
    height: 40,
    borderRadius: 5,
   alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
});

export default Loginpage;