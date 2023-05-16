import React from "react";
import { TouchableOpacity, Text, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from "react-native-size-matters";

import styles from "./styles";
import Container from "src/components/Container";
import Header from "src/components/Header";
import SwipeableRow from "src/components/SwipeableRow";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { IProduct } from "src/interfaces/list.interface";

interface IListScreen {
  turnEditMode: () => void;
  isEditMode: boolean;
  goToAddToList: () => void;
  list: Array<IProduct>;
}

const ListScreen = ({ turnEditMode, isEditMode, goToAddToList, list } : IListScreen) => {
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

  const renderItem = ({ item }: { item: IProduct}) => {
    return (
      <SwipeableRow item={item} isEditMode={isEditMode} />
    );
  }

  return (
    <Container edges={[ 'top' ]}>
      <Header title={"Groceries"} renderRight={renderRight} renderLeft={renderLeft}/>
      <GestureHandlerRootView style={styles.container}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </GestureHandlerRootView>
    </Container>
  );
};

export default ListScreen;
