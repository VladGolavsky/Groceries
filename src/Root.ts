
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { INavigation } from 'src/interfaces/navigation.interface';
import { accessTokenSelector } from './redux/selectors/auth';

const Root: React.FC<INavigation> = ({ navigation }) => {
  const accessToken = useSelector(accessTokenSelector);
  useEffect(() => {
    accessToken ? navigation.replace('SignUp') : navigation.replace('SignIn');
  }, []);

  return null;
};

export default Root;
