// Libraries
import { StyleSheet } from 'react-native';

// Projec files
import { Pallete } from '@app/constant';

const style = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Pallete.common.white
  },
  loginText: {
    fontSize: 28,
    color: Pallete.primary.main,
    textAlign: 'center',
    marginVertical: 32,
  },
  loginHeader: {
    fontSize: 18,
    color: Pallete.typography.primary,
    marginVertical: 8,
  },
  loginButton: {
    backgroundColor: Pallete.primary.main,
    borderRadius: 4,
    paddingVertical: 12,
    shadowColor: Pallete.common.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 12,
  },
  loginButtonText: {
    textAlign: 'center',
    color: Pallete.common.white,
    fontSize: 16,
  },
  orSignText: {
    color: Pallete.typography.secondary,
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 32,
  },
  input: {
    marginVertical: 12,
    paddingVertical: 16,
    fontSize: 15,
    color: Pallete.typography.primary,
    paddingLeft: 16,
    shadowColor: Pallete.typography.disabled,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Pallete.common.white,
    borderRadius: 4,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  socialImage: {
    height: 28,
    width: 28,
  },
  socialLoginButton: {
    shadowColor: Pallete.typography.disabled,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Pallete.common.white,
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center'
  },
  signupText: {
    marginLeft: 5,
    fontWeight: '500'
  }
});

export default style;