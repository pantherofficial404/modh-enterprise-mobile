// Libraries
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Project files
import style from './splash.style';
import { AuthService, NavigationService } from '@app/services';
import { Screens } from '@app/constant';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    if (AuthService.isAuthenticated()) {
      NavigationService.navigate(navigation, Screens.HOME);
    } else {
      NavigationService.navigate(navigation, Screens.LOGIN);
    }
  }, []);

  return (
    <View style={style.root}>
      <Text style={style.logoText}>MV</Text>
    </View>
  )
}

export default SplashScreen;