// Libraries
import React, { useState } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Project files
import style from './login.style';
import Lang from './login.lang';
import Layout from '@app/layout';
import { Typography } from '@app/components';
import { NavigationService, AuthService } from '@app/services';
import { Screens, Setting } from '@app/constant';
import { ILoginBody } from '@app/types';
import * as Util from '@app/utils';
import * as Helpers from '@app/helpers';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const [loginForm, setLoginForm] = useState<ILoginBody>({ email: '', password: '' });
  const [isVerifying, setVerifying] = useState(false);

  const onSignupClick = () => NavigationService.navigate(navigation, Screens.SIGNUP);

  const handleChange = (payload: { name: string; value: string }) => {
    setLoginForm({ ...loginForm, [payload.name]: payload.value });
  }

  const handleSubmit = async () => {
    if (Helpers.isEmpty(loginForm.email)) {
      Util.showSnackMessage({ title: Lang.EN.emailRequired, error: true });
      return;
    }
    if (!Helpers.isEmail(loginForm.email)) {
      Util.showSnackMessage({ title: Lang.EN.emailInvalid, error: true });
      return;
    }
    if (Helpers.isEmpty(loginForm.password)) {
      Util.showSnackMessage({ title: Lang.EN.passwordRequired, error: true });
      return;
    }
    try {
      setVerifying(true);
      await AuthService.login(loginForm);
      Util.showSnackMessage({ title: Lang.EN.loginSuccess });
      NavigationService.navigate(navigation, Screens.HOME);
    } catch (err) {
      Util.showSnackMessage({ title: Lang.EN.invalidLogin, error: true });
    } finally {
      setVerifying(false);
    }
  }

  return (
    <Layout>
      <View style={style.root}>
        <Text style={style.loginText}>{Lang.EN.appText}</Text>
        <Text style={style.loginHeader}>{Lang.EN.loginHeader}</Text>
        <KeyboardAvoidingView>
          <TextInput
            placeholder={Lang.EN.email}
            style={style.input}
            clearButtonMode={Setting.inputClearMode}
            value={loginForm.email}
            onChangeText={(value: string) => handleChange({ name: 'email', value })}
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView>
          <TextInput
            placeholder={Lang.EN.password}
            style={style.input}
            clearButtonMode={Setting.inputClearMode}
            secureTextEntry={true}
            onChangeText={(value: string) => handleChange({ name: 'password', value })}
          />
        </KeyboardAvoidingView>

        <TouchableOpacity style={style.loginButton} onPress={handleSubmit}>
          <Text style={style.loginButtonText}>{Lang.EN.signIn}</Text>
          {isVerifying && (
            <ActivityIndicator style={{ marginLeft: 5 }} />
          )}
        </TouchableOpacity>

        <Text style={style.orSignText}>- {Lang.EN.orSignInWith} - </Text>

        <View style={style.socialLoginContainer}>
          <TouchableOpacity>
            <View style={style.socialLoginButton}>
              <Image source={require('../../assests/icons/google.png')} style={style.socialImage} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.socialLoginButton}>
              <Image source={require('../../assests/icons/facebook.png')} style={style.socialImage} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.signupContainer}>
          <Text>{Lang.EN.dontHaveAccount}</Text>
          <TouchableOpacity onPress={onSignupClick}>
            <Typography color="primary" style={style.signupText}>{Lang.EN.signup}</Typography>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

export default LoginScreen;