// Libraries
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Project files
import { Pallete, Screens } from '@app/constant';
import { Home, Splash, Login, Signup } from '@app/screens';

const Stack = createStackNavigator();

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Pallete.common.white} />
      <Stack.Navigator headerMode="none" initialRouteName={Screens.SIGNUP}>
        <Stack.Screen
          component={Splash}
          name={Screens.SPLASH}
        />
        <Stack.Screen
          component={Login}
          name={Screens.LOGIN}
        />
        <Stack.Screen
          component={Signup}
          name={Screens.SIGNUP}
        />
        <Stack.Screen
          component={Home}
          name={Screens.HOME}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root;
