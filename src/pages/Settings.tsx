import React from 'react';
import tw from 'twrnc';
import {Button, Text, View} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {StackParamList} from 'src/types/navigation';

interface SettingsProps {
  navigation: NativeStackNavigationProp<StackParamList, 'Settings'>;
}

export default function Settings({navigation}: SettingsProps) {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>Settings Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
