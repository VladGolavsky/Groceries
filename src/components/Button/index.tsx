import React from 'react-native';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({ title, onPress } : { title: string, onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
