import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import { socketConnectionStatusSelector } from 'src/redux/selectors/config';
import { usingWithoutAccountSelector } from 'src/redux/selectors/auth';

type IHeader = {
  title: string;
  renderLeft?: () => React.ReactNode;
  renderRight?: () => React.ReactNode;
}

const Header = ({ title, renderLeft = () => null, renderRight = () => null } : IHeader) => {
  const socketConnectionStatus = useSelector(socketConnectionStatusSelector);
  const usingWithoutAccount = useSelector(usingWithoutAccountSelector);

  return (
    <View style={styles.container}>
      <View style={styles.leftPart}>
        {renderLeft()}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        {
          !usingWithoutAccount ? (
            <View style={[styles.dot, !socketConnectionStatus ? styles.emptyDot : {}]} />
          ) : null
        }
      </View>
      <View style={styles.rightPart}>
        {renderRight()}
      </View>
    </View>
  );
};

export default Header;
