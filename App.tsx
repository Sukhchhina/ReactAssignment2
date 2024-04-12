import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loginpage from './screens/Loginpage';
import Signuppage from './screens/Signuppage';
import Landingpage from './screens/Landingpage';
import Plantvendorpage from './screens/Plantvendorpage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './navigations/HomeStack';

const Stack= createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
        
    <Stack.Navigator initialRouteName="Landingpage"
    
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Landingpage" component={Landingpage}
    />
    <Stack.Screen name="Login" component={Loginpage} />
    <Stack.Screen name="Signup" component={Signuppage} />
    <Stack.Screen name="Home" component={HomeStack}/>
   </Stack.Navigator>        
   </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
