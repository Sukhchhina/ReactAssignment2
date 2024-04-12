import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/userimg.jpeg')} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>Reactblackcaps@gmail.com</Text>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.text}>647-XXX-7890</Text>
        <Text style={styles.label}>Country</Text>
        <Text style={styles.text}>Canada</Text>
     
      </View>
      <TouchableOpacity style={styles.button} onPress={goToLogin}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  details: {
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: 'black',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#2b4829',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfile;
