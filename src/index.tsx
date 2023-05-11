import React from 'react';
import { StatusBar, Platform } from 'react-native';
import RootNavigation from 'src/navigation';

import { white } from 'src/constants/colors';

export default () => {
  return (
    <>
      {Platform.OS === 'android' && <StatusBar barStyle={"dark-content"} backgroundColor={white} />}
      <RootNavigation />
    </>
  );
}