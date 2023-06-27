import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  GET_STARTED,
  MY_BOTTOM_TABS,
  SPLASH_SCREEN,
} from '../../constants/Navigator';
import SplashScreen from '../../screens/SplashScreen';
import GetStarted from '../../screens/GetStarted';

import MyBottomTabs from '../BottomTabNavigator/Navigators';

export type RootStackParams = {
  SplashScreen: any;
  GetStarted: any;
  MyBottomTabs: any;
};

const Stack = createStackNavigator<RootStackParams>();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={GET_STARTED} component={GetStarted} />
      <Stack.Screen name={MY_BOTTOM_TABS} component={MyBottomTabs} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
