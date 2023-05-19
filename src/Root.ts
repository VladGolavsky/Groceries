
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Platform, UIManager } from 'react-native';

import { INavigation } from 'src/interfaces/navigation.interface';
import { accessTokenSelector, usingWithoutAccountSelector } from './redux/selectors/auth';
import { setAuthHeader } from './utils/apiConfig';

const Root: React.FC<INavigation> = ({ navigation }) => {

  const accessToken = useSelector(accessTokenSelector);
  const usingWithoutAccount = useSelector(usingWithoutAccountSelector);

  useEffect(() => {
    if (accessToken) {
      setAuthHeader(accessToken);
      navigation.replace('Home');
    } else if (usingWithoutAccount) {
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
