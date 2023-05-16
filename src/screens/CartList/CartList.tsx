import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from "react-native-size-matters";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import SwipeableRow from "src/components/SwipeableRow";
import Container from "src/components/Container";
import Header from "src/components/Header";
import { IProduct } from "src/interfaces/list.interface";

import styles from "./styles";

interface ICartListScreen {
  cartList: Array<IProduct>;
  turnEditMode: () => void;
  isEditMode: boolean;
  goToAddToList: () => void;
};

const CartListScreen = ({ cartList, turnEditMode, isEditMode, goToAddToList } : ICartListScreen) => {
  const renderRight = () => (
    <TouchableOpacity onPress={turnEditMode} style={styles.buttonEditMode} hitSlop={scale(10)}>
      {
        isEditMode ? <Text style={styles.buttonTextDone}>Done</Text> : <Icon name="create-outline" size={scale(23)} />
      }
    </TouchableOpacity>
  );

  const renderLeft = () => {
    if (isEditMode) {
      return (
        <TouchableOpacity onPress={goToAddToList} style={styles.buttonEditMode} hitSlop={scale(10)}>
          <Icon name="add-outline" size={scale(26)} />
        </TouchableOpacity>
      );
    }
    
    return null;
  }

  return (
    <Container edges={[ 'top' ]}>
      <Header title={"Groceries"} renderRight={renderRight} renderLeft={renderLeft}/>
      <GestureHandlerRootView style={styles.container}>
        <SwipeableRow />
      </GestureHandlerRootView>
    </Container>
  );
};

export default CartListScreen;
