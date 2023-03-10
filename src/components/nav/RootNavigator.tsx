import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigator} from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
