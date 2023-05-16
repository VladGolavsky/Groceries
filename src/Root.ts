
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Platform, UIManager } from 'react-native';

import { INavigation } from 'src/interfaces/navigation.interface';
import { accessTokenSelector } from './redux/selectors/auth';
import { setAuthHeader } from './utils/apiConfig';

const Root: React.FC<INavigation> = ({ navigation }) => {
  const accessToken = useSelector(accessTokenSelector);
  useEffect(() => {
    if (accessToken) {
      setAuthHeader(accessToken);
      navigation.replace('Home');
    } else {
      navigation.replace('SignIn')
    }

    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  return null;
};

export default Root;
