// Libraries
import React from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Project files
import style from './login.style';
import Lang from './login.lang';
import Layout from '@app/layout';
import { Typography } from '@app/components';
import { NavigationService } from '@app/services';
import { Screens, Setting } from '@app/constant';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const onSignupClick = () => NavigationService.navigate(navigation, Screens.SIGNUP);

  return (
    <Layout>
      <View style={style.root}>
        <Text style={style.loginText}>{Lang.EN.appText}</Text>
        <Text style={style.loginHeader}>{Lang.EN.loginHeader}</Text>
        <KeyboardAvoidingView>
          <TextInput placeholder={Lang.EN.email} style={style.input} clearButtonMode={Setting.inputClearMode} />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView>
          <TextInput placeholder={Lang.EN.password} style={style.input} clearButtonMode={Setting.inputClearMode} />
        </KeyboardAvoidingView>

        <TouchableOpacity style={style.loginButton}>
          <Text style={style.loginButtonText}>{Lang.EN.signIn}</Text>
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