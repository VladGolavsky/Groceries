import React from "react";
import { View } from "react-native";

import Container from "src/components/Container";
import Header from "src/components/Header";

import styles from "./styles";

const CartListScreen = () => {
  return (
    <Container edges={[ 'top' ]}>
      <Header title={"Groceries"} />
      <View style={styles.container} />
    </Container>
  );
};

export default CartListScreen;
