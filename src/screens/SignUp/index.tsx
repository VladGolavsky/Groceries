import React, { useEffect, useState } from 'react';
import { getUniqueId } from 'react-native-device-info';
import { useDispatch, useSelector } from 'react-redux';

import SignUpScreen from './SignUp';

import { INavigation } from 'src/interfaces/navigation.interface';
import { setErrorAction, signUpAction } from 'src/redux/actions';
import * as ERRORS from 'src/constants/errors';
import { errorsSelector, loadingSelector } from 'src/redux/selectors';

const passwordRegEx = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

const SignUp: React.FC<INavigation> = ({ navigation }) => {
  const dispatch = useDispatch();

  const { signUp: signUpLoading } = useSelector(loadingSelector);
  const { signUp: signUpError } = useSelector(errorsSelector)

  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [deviceId, setDeviceId] = useState<string>('');

  useEffect(() => {
    getUniqueId().then((uniqueId: string) => {
      setDeviceId(uniqueId);
    })
  }, []);

  const onSignUp = () => {
    if (!email.length || !userName.length || !password.length || !confirmPassword.length) {
      dispatch(setErrorAction({ signUp: ERRORS.FillAllFields }));
      return;
    }

    if (!passwordRegEx.test(password)) {
      dispatch(setErrorAction({ signUp: ERRORS.WeakPassword }));
      return;
    }

    if (password !== confirmPassword) {
      dispatch(setErrorAction({ signUp: ERRORS.PasswordsNotSame }));
      return;
    }

    dispatch(signUpAction({ email, userName, password, deviceId }));
  }

  const goBack = () => {
    navigation.goBack();
  }

  return (
   <SignUpScreen
    email={email}
    setEmail={setEmail}
    password={password}
    setPassword={setPassword}
    userName={userName}
    setUserName={setUserName}
    confirmPassword={confirmPassword}
    setConfirmPassword={setConfirmPassword}
    onSignUp={onSignUp}
    goBack={goBack}
    signUpError={signUpError}
    signUpLoading={signUpLoading}
   />
  );
}

export default SignUp;
