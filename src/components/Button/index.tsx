import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import styles from './styles';
import { lightGray } from 'src/constants/colors';

type IButton = {
  title: string;
  onPress: () => void;
  loading?: boolean;
}

const Button: React.FC<IButton> = ({ title, onPress, loading = false }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} disabled={loading}>
      {
        loading ? (
          <ActivityIndicator color={lightGray} />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )
      }
    </TouchableOpacity>
  );
}

export default Button;
