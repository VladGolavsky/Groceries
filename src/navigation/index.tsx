import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Root from 'src/Root';

import SignIn from 'src/screens/SignIn';
import SignUp from 'src/screens/SignUp';

const MainStack = createNativeStackNavigator();

export default () => {
  
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Root" component={Root} options={{ header: () => null }} />
        <MainStack.Screen name="SignIn" component={SignIn} options={{ header: () => null }} />
        <MainStack.Screen name="SignUp" component={SignUp} options={{ header: () => null }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
