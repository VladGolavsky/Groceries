import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Button from '../Button';

const EmptyList = ({ goToAddList } : { goToAddList: () => void }) => (
  <>
    <Text style={styles.textListEmpty}>List is empty</Text>
    <View style={styles.buttonContainer}>
      <Button
        onPress={goToAddList}
        title='ADD NEW ITEM'
      />
    </View>
  </>
)

export default EmptyList;
