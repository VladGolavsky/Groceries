import React from 'react';
import { StatusBar, Platform } from 'react-native';
import RootNavigation from 'src/navigation';
import { Provider } from 'react-redux';

import { white } from 'src/constants/colors';
import store from './redux';

export default () => {
  return (
    <>
      <Provider store={store}>
        {Platform.OS === 'android' && <StatusBar barStyle={"dark-content"} backgroundColor={white} />}
        <RootNavigation />
      </Provider>
    </>
  );
}