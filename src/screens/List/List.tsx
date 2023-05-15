import React from "react";
import { View } from "react-native";


import styles from "./styles";
import Container from "src/components/Container";
import Header from "src/components/Header";
import SwipeableRow from "src/components/SwipeableRow";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ListScreen = () => {
  return (
    <Container edges={[ 'top' ]}>
      <Header title={"Groceries"} />
      <GestureHandlerRootView style={styles.container}>
        <SwipeableRow />
      </GestureHandlerRootView>
    </Container>
  );
};

export default ListScreen;
