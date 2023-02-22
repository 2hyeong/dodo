import React, {ReactNode} from 'react';
import {Text as RnText} from 'react-native';
import tw from 'src/lib/tw';
import type {Style} from 'twrnc/dist/esm/types';

interface TextProps {
  style?: Style;
  children: ReactNode;
  fontWeight?: twNotoWeight;
}

export default function Text({
  children,
  style,
  fontWeight = '',
  ...rest
}: TextProps) {
  return (
    <RnText style={[style, tw`font-notoSans${fontWeight}`]} {...rest}>
      {children}
    </RnText>
  );
}
