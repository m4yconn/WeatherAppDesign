import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitPage from './InitPage';
import SecondPage from './SecondPage';
import FotterTop from '../components/FotterTop';

const Stack = createNativeStackNavigator();

export default function Navigation(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
      >
        <Stack.Screen
          name="InitPage"
          component={InitPage}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
        />

        <Stack.Screen
            name="FotterTop"
            component={FotterTop}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};