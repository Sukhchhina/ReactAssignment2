import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const Stack =createNativeStackNavigator();
const Landingpage = () => {
  const navigation =useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>Welcome To Plant Care</Text>
        <Image
          source={require('../assets/ic_launcher.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.lowerContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.devtext}>@Developed by ReactBlackCaps</Text>
     
      </View>
      
    </View>
  );
};
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop:50,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#2b4829', 
    width: '100%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  devtext: {
    fontSize: 16,
    marginTop:50,
  },
});

export default Landingpage;
