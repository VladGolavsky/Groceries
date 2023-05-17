import React from "react";
import { TouchableOpacity, Text, FlatList, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from "react-native-size-matters";

import styles from "./styles";
import Container from "src/components/Container";
import Header from "src/components/Header";
import SwipeableRow from "src/components/SwipeableRow";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { IProduct } from "src/interfaces/list.interface";
import { StatusEnum } from "src/enums/list.enum";

interface IListScreen {
  turnEditMode: () => void;
  isEditMode: boolean;
  goToAddToList: () => void;
  list: Array<IProduct>;
  onDelete: (_id: string) => void;
  onUpdateProduct: (_id: string, status: StatusEnum) => void;
  goToSettings: () => void;
}

const ListScreen = ({ turnEditMode, isEditMode, goToAddToList, list, onDelete, onUpdateProduct, goToSettings } : IListScreen) => {
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
    
    return (
      <TouchableOpacity onPress={goToSettings} style={styles.buttonEditMode} hitSlop={scale(10)}>
        <Icon name="settings-outline" size={scale(26)} />
      </TouchableOpacity>
    );
  }

  const renderItem = ({ item }: { item: IProduct}) =>
    <SwipeableRow item={item} isEditMode={isEditMode} onDelete={onDelete} onUpdateProduct={onUpdateProduct} />

  return (
    <>
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
    </>
  );
};

export default ListScreen;
