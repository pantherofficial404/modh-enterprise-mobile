// Libraries
import { StyleSheet } from 'react-native';

// Project files
import { Pallete } from '@app/constant';

const style = StyleSheet.create({
  root: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Pallete.border.main,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Pallete.common.black,
    marginLeft: 12,
    justifyContent: 'center',
  },
});

export default style;
