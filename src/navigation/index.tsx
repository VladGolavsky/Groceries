import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Root from 'src/Root';

import SignIn from 'src/screens/SignIn';
import SignUp from 'src/screens/SignUp';

import CartList from 'src/screens/CartList';
import List from 'src/screens/List';

import ListIcon from 'src/assets/list.png';
import ListIconFilled from 'src/assets/list_filled.png';
import CartIcon from 'src/assets/cart_tab.png';
import CartIconFilled from 'src/assets/cart_tab_filled.png';
import AddToList from 'src/screens/AddToList';

import { lightGray } from 'src/constants/colors';
import styles from './styles';

const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const optionsWithoutHeader = {
  header: () => null
};

export const navigationRef = createNavigationContainerRef();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={{ ...optionsWithoutHeader, tabBarLabel: () => null, tabBarStyle: { backgroundColor: lightGray } }}>
      <Tab.Screen
        name="List"
        component={List}
        options={{ tabBarIcon: ({ focused }) => 
          <Image source={focused ? ListIconFilled : ListIcon} style={focused ? styles.listFilledIcon : styles.listIcon} />
        }}
      />
      <Tab.Screen
        name="CartList"
        component={CartList}
        options={{ tabBarIcon: ({ focused }) =>
          <Image source={focused ? CartIconFilled : CartIcon} style={focused ? styles.cartFilledIcon : styles.cartIcon} />
        }}
      />
    </Tab.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <MainStack.Navigator>
        <MainStack.Screen name="Root" component={Root} options={optionsWithoutHeader} />
        <MainStack.Screen name="SignIn" component={SignIn} options={optionsWithoutHeader} />
        <MainStack.Screen name="SignUp" component={SignUp} options={optionsWithoutHeader} />
        <MainStack.Screen name="Home" component={Home} options={optionsWithoutHeader} />
        <MainStack.Screen name="AddToList" component={AddToList} options={{...optionsWithoutHeader, gestureDirection: 'vertical'}} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
