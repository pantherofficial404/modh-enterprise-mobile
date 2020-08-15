// Libraries
import React from 'react';
import { TextInputProperties, View, TextInput } from 'react-native';

// Project files
import { Typography } from '@app/components';
import textInputStyle from './textinput.style';
import { Setting } from '@app/constant';

interface IProps {
  label?: string;
  name: string;
  onChangeText?: (value: any) => any;
}

const TextInputComponent: React.FC<IProps & TextInputProperties> = (props) => {
  const { label, name, onChangeText, style, ...rest } = props;

  return (
    <View>
      {Boolean(label) && (
        <Typography fontWeight="600" marginVertical={6} fontSize={16}>
          {label}
        </Typography>
      )}
      <TextInput
        {...rest}
        style={[textInputStyle.input, style]}
        onChangeText={(value) =>
          onChangeText ? onChangeText({ [name]: value }) : () => {}
        }
        clearButtonMode={Setting.inputClearMode}
      />
    </View>
  );
};

export default TextInputComponent;
