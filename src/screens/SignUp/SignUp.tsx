import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

import Container from 'src/components/Container';
import DismissKeyboard from 'src/components/DismissKeyboard';
import TextInput from 'src/components/TextInput';

import styles from './styles';
import Button from 'src/components/Button';

type ISignUpScreen = {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  userName: string;
  setUserName: (text: string) => void;
  confirmPassword: string;
  setConfirmPassword: (text: string) => void;
  onSignUp: () => void;
  goBack: () => void;
};

const SignUpScreen: React.FC<ISignUpScreen> = ({
  email,
  setEmail,
  password,
  setPassword,
  userName,
  setUserName,
  confirmPassword,
  setConfirmPassword,
  onSignUp,
  goBack,
}) => {
  return (
    <Container>
      <DismissKeyboard>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS === 'android' ? 30 : 50} style={styles.container}>
          <TouchableOpacity onPress={goBack} style={styles.buttonGoBack}>
            <Text style={styles.buttonBackText}>{'<'}</Text>
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
              value={userName}
              onChangeText={setUserName}
              additionStyles={styles.textInputAdditionStyles}
              placeholder="Username"
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              additionStyles={styles.textInputAdditionStyles}
              placeholder="Password"
              secure
            />
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              secure
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="SIGN UP"
              onPress={onSignUp}
            />
          </View>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    </Container>
  );
};

export default SignUpScreen;
