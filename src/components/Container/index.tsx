import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const Container = ({ children } : { children: React.ReactNode }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

export default Container;
