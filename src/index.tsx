// Libraries
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Project files
import { Pallete, Screens } from '@app/constant';
import {
  Home,
  Splash,
  Login,
  Signup,
  AddressList,
  AddressAdd,
} from '@app/screens';

const Stack = createStackNavigator();

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Pallete.common.white} />
      <Stack.Navigator headerMode="none" initialRouteName={Screens.SPLASH}>
        <Stack.Screen component={Splash} name={Screens.SPLASH} />
        <Stack.Screen component={Login} name={Screens.LOGIN} />
        <Stack.Screen component={Signup} name={Screens.SIGNUP} />
        <Stack.Screen component={Home} name={Screens.HOME} />
        <Stack.Screen component={AddressList} name={Screens.ADDRESS_LIST} />
        <Stack.Screen component={AddressAdd} name={Screens.ADDRESS_ADD} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
