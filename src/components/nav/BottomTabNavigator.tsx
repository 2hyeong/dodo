import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from 'src/pages/Home';
import Settings from 'src/pages/Settings';

const BottomTab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  );
}
