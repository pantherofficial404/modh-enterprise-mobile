import Snackbar, { SnackbarAction } from 'react-native-snackbar';

import { Pallete } from '@app/constant';

export const showSnackMessage = (options: { title: string, error?: boolean, action?: SnackbarAction }) => {
  const { title, error } = options;

  if (options.action) {
    options.action.textColor = 'white';
  }

  Snackbar.show({
    backgroundColor: error ? 'darkred' : Pallete.success.main,
    textColor: Pallete.common.white,
    duration: Snackbar.LENGTH_LONG,
    text: title,
    action: options.action,
  });
};