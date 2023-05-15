import React from "react";
import { View } from "react-native";

import styles from "./styles";
import Container from "src/components/Container";
import Header from "src/components/Header";

const ListScreen = () => {
  return (
    <Container edges={[ 'top' ]}>
      <Header title={"Groceries"} />
      <View style={styles.container} />
    </Container>
  );
};

export default ListScreen;
