import React, { useEffect, useState } from 'react';
import { getUniqueId } from 'react-native-device-info';
import { useDispatch } from 'react-redux';

import SignUpScreen from './SignUp';

import { INavigation } from 'src/interfaces/navigation.interface';
import { signUpAction } from 'src/redux/actions';

const SignUp: React.FC<INavigation> = ({ navigation }) => {
  const dispatch = useDispatch();

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
   />
  );
}

export default SignUp;
