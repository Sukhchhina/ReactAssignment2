import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Plantvendorpage from '../screens/Plantvendorpage';
import Planthome from '../screens/Planthome';
import Userprofile from '../screens/Userprofile';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  

  return (
   
      <Tab.Navigator>
        <Tab.Screen name="Vendor"
         component={Plantvendorpage} 
      />
        <Tab.Screen name="Info" component={Planthome} />
        <Tab.Screen name="Profile" component={Userprofile} />
      </Tab.Navigator>
      
  );
};

export default HomeStack;
