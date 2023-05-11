import * as React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Root from 'src/Root';

import SignIn from 'src/screens/SignIn';
import SignUp from 'src/screens/SignUp';

const MainStack = createNativeStackNavigator();

const optionsWithoutHeader = {
  header: () => null
};

export const navigationRef = createNavigationContainerRef();


export default () => {
  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <MainStack.Navigator>
        <MainStack.Screen name="Root" component={Root} options={optionsWithoutHeader} />
        <MainStack.Screen name="SignIn" component={SignIn} options={optionsWithoutHeader} />
        <MainStack.Screen name="SignUp" component={SignUp} options={optionsWithoutHeader} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
