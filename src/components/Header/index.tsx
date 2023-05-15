import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

type IHeader = {
  title: string;
  renderLeft?: () => React.ReactNode;
  renderRight?: () => React.ReactNode;
}

const Header = ({ title, renderLeft = () => null, renderRight = () => null } : IHeader) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftPart}>
        {renderLeft()}
      </View>
      <Text style={styles.textTitle}>{title}</Text>
      <View style={styles.rightPart}>
        {renderRight()}
      </View>
    </View>
  );
};

export default Header;
