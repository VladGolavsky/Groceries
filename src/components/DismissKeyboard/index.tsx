import React from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';

import styles from './styles';

const DismissKeyboard = ({ children } : { children: React.ReactNode }) => {
  const dismiss = () => Keyboard.dismiss();

  return (
    <TouchableOpacity style={styles.container} onPress={dismiss} activeOpacity={1}>
      {children}
    </TouchableOpacity>
  );
}

export default DismissKeyboard;
