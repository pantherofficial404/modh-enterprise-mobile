// Libraries
import React from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Project files
import style from '../login/login.style';
import Lang from './signup.lang';
import Layout from '@app/layout';
import { Typography } from '@app/components';
import { Setting, Screens } from '@app/constant';
import { NavigationService } from '@app/services';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const onLoginClick = () => NavigationService.navigate(navigation, Screens.LOGIN);

  return (
    <Layout>
      <View style={style.root}>
        <Text style={style.loginText}>{Lang.EN.appText}</Text>
        <Text style={style.loginHeader}>{Lang.EN.signupHeader}</Text>
        <KeyboardAvoidingView>
          <TextInput placeholder={Lang.EN.email} style={style.input} clearButtonMode={Setting.inputClearMode} />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView>
          <TextInput placeholder={Lang.EN.password} style={style.input} clearButtonMode={Setting.inputClearMode} secureTextEntry={true} />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView>
          <TextInput placeholder={Lang.EN.confirmPassword} style={style.input} clearButtonMode={Setting.inputClearMode} secureTextEntry={true} />
        </KeyboardAvoidingView>

        <TouchableOpacity style={style.loginButton}>
          <Text style={style.loginButtonText}>{Lang.EN.signup}</Text>
        </TouchableOpacity>

        <Text style={style.orSignText}>- {Lang.EN.orSignUpWith} - </Text>

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
          <Text>{Lang.EN.alreadyAccount}</Text>
          <TouchableOpacity onPress={onLoginClick}>
            <Typography color="primary" style={style.signupText}>{Lang.EN.login}</Typography>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

export default LoginScreen;