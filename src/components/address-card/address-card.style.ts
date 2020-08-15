// Libraries
import { StyleSheet } from 'react-native';

// Project files
import { Pallete } from '@app/constant';

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderColor: Pallete.border.main,
    borderRadius: 4,
    marginBottom: 8,
  },
  editButton: {
    backgroundColor: Pallete.primary.main,
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    flex: 0,
    shadowColor: Pallete.common.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonAction: {
    flexDirection: 'row',
  },
  deleteButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    flex: 0,
    marginLeft: 10,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteIcon: {
    height: 28,
    width: 28,
  },
});

export default style;
