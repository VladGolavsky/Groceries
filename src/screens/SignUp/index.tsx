import React, { useState } from 'react';

import SignUpScreen from './SignUp';

import { INavigation } from 'src/interfaces/navigation.interface';

const SignUp: React.FC<INavigation> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSignUp = () => {

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
