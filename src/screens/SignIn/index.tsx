import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch } from 'react-redux';

import SignInScreen from './SignIn';

import { INavigation } from 'src/interfaces/navigation.interface';
import { signInAction } from 'src/redux/actions';

const SignIn: React.FC<INavigation> = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const onSignIn = () => {
    dispatch(signInAction({ email, password }));
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
