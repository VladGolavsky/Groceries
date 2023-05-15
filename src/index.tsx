import React from 'react';
import { StatusBar, Platform } from 'react-native';
import RootNavigation from 'src/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { lightGray } from 'src/constants/colors';
import store, { persistor } from './redux';

export default () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {Platform.OS === 'android' && <StatusBar barStyle={"dark-content"} backgroundColor={lightGray} />}
          <RootNavigation />
        </PersistGate>
      </Provider>
    </>
  );
}