// Libraries
import { StyleSheet } from 'react-native';

// Project files
import { Pallete } from '@app/constant';

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Pallete.common.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: Pallete.primary.main,
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 6,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: Pallete.common.white,
    marginVertical: 12,
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Pallete.border.main,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default style;
