import React, { createRef } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput as RNTextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Container from 'src/components/Container';
import DismissKeyboard from 'src/components/DismissKeyboard';
import TextInput from 'src/components/TextInput';

import styles from './styles';
import Button from 'src/components/Button';
import { black } from 'src/constants/colors';
import { moderateScale } from 'react-native-size-matters';
import * as ERRORS from 'src/constants/errors';

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
  signUpError: string;
  signUpLoading: boolean;
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
  signUpError,
  signUpLoading,
}) => {
  const userNameField = createRef<RNTextInput>();
  const passwordField = createRef<RNTextInput>();
  const confirmPasswordField = createRef<RNTextInput>();

  const focusUserName = () => userNameField.current?.focus();
  const focusPassword = () => passwordField.current?.focus();
  const focusConfirmPassword = () => confirmPasswordField.current?.focus();

  return (
    <Container>
      <DismissKeyboard>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS === 'android' ? 50 : 50} style={styles.container}>
          <TouchableOpacity onPress={goBack} style={styles.buttonGoBack} hitSlop={10}>
            <Icon name="chevron-left" color={black} size={moderateScale(22)}/>
          </TouchableOpacity>
          <Text style={styles.textLogo}>Groceries</Text>
          <View style={styles.textInputsContainer}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              additionStyles={styles.textInputAdditionStyles}
              keyboardType="email-address"
              placeholder="Email"
              error={signUpError === ERRORS.PasswordsNotSame || signUpError === ERRORS.WeakPassword ? '' : signUpError}
              returnKeyType="next"
              onSubmitEditing={focusUserName}
            />
            <TextInput
              ref={userNameField}
              value={userName}
              onChangeText={setUserName}
              additionStyles={styles.textInputAdditionStyles}
              placeholder="Username"
              error={signUpError === ERRORS.PasswordsNotSame || signUpError === ERRORS.WeakPassword ? '' : signUpError}
              returnKeyType="next"
              onSubmitEditing={focusPassword}
            />
            <TextInput
              ref={passwordField}
              value={password}
              onChangeText={setPassword}
              additionStyles={styles.textInputAdditionStyles}
              placeholder="Password"
              error={signUpError}
              withSecure
              returnKeyType="next"
              onSubmitEditing={focusConfirmPassword}
            />
            <TextInput
              ref={confirmPasswordField}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              error={signUpError}
              withSecure
              returnKeyType="done"
              onSubmitEditing={onSignUp}
            />
          </View>
          {
            signUpError?.length ? (
              <View style={styles.textErrorContainer}>
                <Text style={styles.textError}>{signUpError}</Text>
              </View>
            ) : (
              <View style={styles.textErrorContainer} />
            )
          }
          <View style={styles.buttonContainer}>
            <Button
              title="SIGN UP"
              onPress={onSignUp}
              loading={signUpLoading}
            />
          </View>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    </Container>
  );
};

export default SignUpScreen;
