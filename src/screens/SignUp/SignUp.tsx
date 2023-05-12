import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Container from 'src/components/Container';
import DismissKeyboard from 'src/components/DismissKeyboard';
import TextInput from 'src/components/TextInput';

import styles from './styles';
import Button from 'src/components/Button';
import { black } from 'src/constants/colors';
import { moderateScale } from 'react-native-size-matters';

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
              withSecure
            />
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              withSecure
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
