// Libraries
import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

// Project files
import { Pallete } from '@app/constant';

interface IProps {
  color?: 'primary' | 'textPrimary' | 'textSecondary' | 'white';
  style?: StyleProp<TextStyle>;
}

const getColor = (
  color: 'primary' | 'textPrimary' | 'textSecondary' | 'white' | undefined,
) => {
  if (color === 'primary') {
    return Pallete.primary.main;
  }
  if (color === 'textPrimary') {
    return Pallete.typography.primary;
  }
  if (color === 'textSecondary') {
    return Pallete.typography.secondary;
  }
  if (color === 'white') {
    return Pallete.common.white;
  }
  return Pallete.typography.primary;
};

const TypographyComponent: React.FC<IProps & TextStyle> = (props) => {
  const { children, color, style, ...rest } = props;
  return (
    <Text style={[{ ...rest, color: getColor(color) }, style]}>{children}</Text>
  );
};

TypographyComponent.defaultProps = {
  textAlign: 'left',
  color: 'textPrimary',
};

export default TypographyComponent;
