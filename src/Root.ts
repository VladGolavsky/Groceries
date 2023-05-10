
import React, { useEffect } from 'react';
import { INavigation } from 'src/interfaces/navigation.interface';

const Root: React.FC<INavigation> = ({ navigation }) => {
  useEffect(() => {
    navigation.replace('SignIn');
  }, []);

  return null;
};

export default Root;
