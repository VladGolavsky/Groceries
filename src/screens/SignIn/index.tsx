import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch } from 'react-redux';
import { getUniqueId } from 'react-native-device-info';


import SignInScreen from './SignIn';

import { INavigation } from 'src/interfaces/navigation.interface';
import { signInAction } from 'src/redux/actions';

const SignIn: React.FC<INavigation> = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [deviceId, setDeviceId] = useState<string>('')

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    getUniqueId().then((uniqueId: string) => {
      setDeviceId(uniqueId);
    })
  }, []);

  const onSignIn = () => {
    dispatch(signInAction({ email, password, deviceId }));
  }

  const onUseWithoutAccount = () => {

  }
  
  const goToSignUp = () => {
    navigation.navigate('SignUp')
  }

  return (
   <SignInScreen
    email={email}
    setEmail={setEmail}
    password={password}
    setPassword={setPassword}
    onSignIn={onSignIn}
    onUseWithoutAccount={onUseWithoutAccount}
    goToSignUp={goToSignUp}
   />
  );
}

export default SignIn;
