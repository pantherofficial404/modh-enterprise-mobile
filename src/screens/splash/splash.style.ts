// Libraries
import { StyleSheet } from 'react-native';

// Project files
import { Pallete } from '@app/constant';

const style = StyleSheet.create({
  root: {
    backgroundColor: Pallete.primary.main,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    color: Pallete.common.white,
    fontSize: 30,
  }
});

export default style;