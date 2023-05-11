import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

type IButton = {
  title: string;
  onPress: () => void;
}

const Button: React.FC<IButton> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
