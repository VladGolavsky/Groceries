import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { scale } from 'react-native-size-matters';

import Container from 'src/components/Container';
import Header from 'src/components/Header';

import styles from './styles';

interface IAddToListScreen {
  goBack: () => void;
  onDone: () => void;
};

const AddToListScreen = ({ goBack, onDone } : IAddToListScreen) => {
  const renderLeft = () => (
    <TouchableOpacity style={styles.buttonHeader} hitSlop={scale(10)} onPress={goBack}>
      <Text style={styles.buttonTextHeader}>Cancel</Text>
    </TouchableOpacity>
  );

  const renderRight = () => (
    <TouchableOpacity style={styles.buttonHeader} hitSlop={scale(10)} onPress={onDone}>
      <Text style={styles.buttonTextHeader}>Done</Text>
    </TouchableOpacity>
  );

  return (
    <Container>
      <Header
        title='Add new list item'
        renderLeft={renderLeft}
        renderRight={renderRight}
      />
      <View style={styles.container}>
        <Text style={styles.textTitle}>Add new list item</Text>
      </View>
    </Container>
  );
}

export default AddToListScreen;
