import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch,useSelector } from 'react-redux';
import { getUniqueId } from 'react-native-device-info';
import { Keyboard } from 'react-native';

import SignInScreen from './SignIn';

import { INavigation } from 'src/interfaces/navigation.interface';
import { signInAction } from 'src/redux/actions';
import { errorsSelector, loadingSelector } from 'src/redux/selectors';
import { setErrorAction } from 'src/redux/actions/errors';
import * as ERRORS from 'src/constants/errors';
import * as actions from 'src/redux/actions';
import { usingWithoutAccountSelector } from 'src/redux/selectors/auth';

const SignIn: React.FC<INavigation> = ({ navigation }) => {
  const dispatch = useDispatch();

  const { signIn: signInLoading } = useSelector(loadingSelector);
  const { signIn: signInError } = useSelector(errorsSelector);
  const usingWithoutAccount = useSelector(usingWithoutAccountSelector);

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
    if (!email.length || !password.length) {
      dispatch(setErrorAction({ signIn: ERRORS.FillAllFields }));
      return;
    }

    Keyboard.dismiss();
    dispatch(setErrorAction({ signIn: '' }));        
    dispatch(signInAction({ email, password, deviceId }));
  }

  const onUseWithoutAccount = () => {
    dispatch(actions.setUsingWithoutAccountAction(true));
    navigation.replace('Home');
  }

  const goToSettings = () => {
    dispatch(actions.setShowSettingsModalAction(true));
  }
  
  const goToSignUp = () => {
    dispatch(actions.setErrorAction({ signUp: '' }));
    navigation.navigate('SignUp')
  }

  const goBack = () => {
    navigation.goBack();
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
    signInLoading={signInLoading}
    signInError={signInError}
    goToSettings={goToSettings}
    usingWithoutAccount={usingWithoutAccount}
    goBack={goBack}
   />
  );
}

export default SignIn;
