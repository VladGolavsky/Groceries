import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Container from 'src/components/Container';
import DismissKeyboard from 'src/components/DismissKeyboard';
import TextInput from 'src/components/TextInput';

import styles from './styles';
import Button from 'src/components/Button';

const SignInScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  onSignIn,
  onUseWithoutAccount,
  goToSignUp,
} : {
  email: string,
  setEmail: (text: string) => void,
  password: string,
  setPassword: (text: string) => void,
  onSignIn: () => void,
  onUseWithoutAccount: () => void,
  goToSignUp: () => void,
}) => {
  return (
    <Container>
      <DismissKeyboard>
        <View style={styles.container}>
          <TouchableOpacity onPress={goToSignUp} style={styles.buttonSignUp}>
            <Text style={styles.textSignUp}>{'SIGN UP >'}</Text>
          </TouchableOpacity>
          <Text style={styles.textLogo}>Groceries</Text>
          <View style={styles.textInputsContainer}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              additionStyles={styles.textInputAdditionStyles}
              placeholder="Email"
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secure
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="SIGN IN"
              onPress={onSignIn}
            />
          </View>
          <TouchableOpacity onPress={onUseWithoutAccount} style={styles.buttonUseWithoutAccount}>
            <Text style={styles.textUseWithoutAccount}>Use without account</Text>
          </TouchableOpacity>
        </View>
      </DismissKeyboard>
    </Container>
  );
};

export default SignInScreen;
