import React, { createRef } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput as RNTextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Container from 'src/components/Container';
import DismissKeyboard from 'src/components/DismissKeyboard';
import TextInput from 'src/components/TextInput';

import styles from './styles';
import Button from 'src/components/Button';
import { black } from 'src/constants/colors';
import { moderateScale } from 'react-native-size-matters';


type ISignInScreen = {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  onSignIn: () => void;
  onUseWithoutAccount: () => void;
  goToSignUp: () => void;
  signInLoading: boolean;
  signInError: string;
}

const SignInScreen: React.FC<ISignInScreen> = ({
  email,
  setEmail,
  password,
  setPassword,
  onSignIn,
  onUseWithoutAccount,
  goToSignUp,
  signInLoading,
  signInError,
}) => {
  const passwordRef = createRef<RNTextInput>();

  const focusPasswordField = () => passwordRef.current?.focus();

  return (
    <Container>
      <DismissKeyboard>
        <KeyboardAvoidingView behavior="position"  style={styles.container}>
          <TouchableOpacity onPress={goToSignUp} style={styles.buttonSignUp}>
            <Text style={styles.textSignUp}>{'SIGN UP'}</Text>
            <Icon name="chevron-right" color={black} size={moderateScale(20)} style={styles.arrowIcon}/>
          </TouchableOpacity>
          <Text style={styles.textLogo}>Groceries</Text>
          <View style={styles.textInputsContainer}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              additionStyles={styles.textInputAdditionStyles}
              placeholder="Email"
              keyboardType="email-address"
              error={signInError}
              onSubmitEditing={focusPasswordField}
              returnKeyType="next"
            />
            <TextInput
              ref={passwordRef}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              withSecure
              error={signInError}
              onSubmitEditing={onSignIn}
              returnKeyType="done"
            />
          </View>
          {
            signInError?.length ? (
              <View style={styles.textErrorContainer}>
                <Text style={styles.textError}>{signInError}</Text>
              </View>
            ) : (
              <View style={styles.textErrorContainer} />
            )
          }
          <View style={styles.buttonContainer}>
            <Button
              title="SIGN IN"
              onPress={onSignIn}
              loading={signInLoading}
            />
          </View>
          <TouchableOpacity onPress={onUseWithoutAccount} style={styles.buttonUseWithoutAccount}>
            <View style={styles.textUseWithoutAccountContainer}>
              <Text style={styles.textUseWithoutAccount}>Use without account</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    </Container>
  );
};

export default SignInScreen;
