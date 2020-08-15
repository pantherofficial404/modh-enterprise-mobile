// Libraries
import { StyleSheet } from 'react-native';

// Project files
import { Pallete } from '@app/constant';

const style = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  addAddressButton: {
    backgroundColor: Pallete.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    margin: 12,
    borderRadius: 5,
  },
});

export default style;
