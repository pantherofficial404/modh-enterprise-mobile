// Libraries
import { StyleSheet } from 'react-native';

// Project files
import { Pallete } from '@app/constant';

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Pallete.border.main,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginBottom: 4,
  },
});

export default style;
