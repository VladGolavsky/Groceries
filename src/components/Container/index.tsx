import React from 'react';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

import styles from './styles';

type IContainer = {
  children: React.ReactNode;
}

const Container: React.FC<IContainer & SafeAreaViewProps> = ({ children, edges }) => {
  return (
    <SafeAreaView edges={edges} style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

export default Container;
