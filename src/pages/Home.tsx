import React from 'react';
import tw from 'twrnc';
import {Button, Text, View} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {StackParamList} from 'src/types/navigation';

interface HomeProps {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
}

export default function Home({navigation}: HomeProps) {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}
