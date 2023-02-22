import React from 'react';
import tw from 'src/lib/tw';
import {View} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {StackParamList} from 'src/types/navigation';
import CardList from 'src/components/features/mbti/CardList';
import Text from 'src/components/common/Text';
import Card from 'src/components/common/Card';

interface HomeProps {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
}

export default function Home({navigation}: HomeProps) {
  return (
    <View style={tw`bg-[#f9fafbcc] h-full bg-neutral-700`}>
      <Card style={tw`bg-white`}>
        <Text style={tw`text-lg w-full py-10 px-5`} fontWeight="Bold">
          궁금한 성격유형을 선택해주세요 🚀
        </Text>
        <CardList />
      </Card>
    </View>
  );
}
