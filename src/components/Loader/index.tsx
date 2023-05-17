import React from 'react';
import { View, ActivityIndicator, Platform } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import { white } from 'src/constants/colors';
import { loadingSelector } from 'src/redux/selectors';

const Loader = () => {
  const { globalApp: globalAppLoading } = useSelector(loadingSelector);

  if (!globalAppLoading) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator color={white} size={Platform.OS === 'ios' ? 'large' : 36} />
    </View>
  );
}

export default Loader;
