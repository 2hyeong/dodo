import React from 'react';
import {Pressable, FlatList} from 'react-native';
import {items} from 'src/constants/mbti';
import tw from 'src/lib/tw';
import Card from 'src/components/common/Card';
import Text from 'src/components/common/Text';
import type {Item, Key} from 'src/types/mbti';
import UseSelect from 'src/features/mbti/useSelect';

export default function CardList() {
  const {select, selected} = UseSelect();
  const onPress = (key: Key) => () => {
    select(key);
  };

  const isActiveStyle = (key: Key, type: Item['type']) =>
    key === selected[type] ? 'opacity-100' : 'opacity-40';

  return (
    <FlatList
      data={items}
      columnWrapperStyle={tw`gap-2 py-1`}
      renderItem={({item}: {item: Item}) => (
        <Pressable onPress={onPress(item.key)}>
          <Card style={tw`w-20 h-20 bg-[${item.bgcolor}]`}>
            <Text
              fontWeight="Bold"
              style={tw`text-3xl text-[${item.color}]
              ${isActiveStyle(item.key, item.type)}`}>
              {item.key}
            </Text>
          </Card>
        </Pressable>
      )}
      keyExtractor={(item, index) => item.key + index}
      numColumns={4}
    />
  );
}
