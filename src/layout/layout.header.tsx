// Libraries
import React from 'react';
import { View, Text } from 'react-native';

// Project files
import style from './style/layout.header.style';

interface IProps {
  title: string;
}

const LayoutHeader: React.FC<IProps> = (props) => {
  const { title } = props;
  return (
    <View style={style.root}>
      <Text style={style.headerTitle}>{title}</Text>
    </View>
  );
};

export default LayoutHeader;
