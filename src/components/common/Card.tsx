import React, {ReactNode} from 'react';
import {View} from 'react-native';
import tw from 'src/lib/tw';
import type {Style} from 'twrnc/dist/esm/types';

interface CardProps {
  style?: Style;
  children: ReactNode;
}

export default function Card({style, children, ...rest}: CardProps) {
  return (
    <View
      style={[
        style,
        tw`rounded overflow-hidden shadow-lg flex justify-center items-center`,
      ]}
      {...rest}>
      {children}
    </View>
  );
}
