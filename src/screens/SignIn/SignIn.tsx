import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
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
}

const SignInScreen: React.FC<ISignInScreen> = ({
  email,
  setEmail,
  password,
  setPassword,
  onSignIn,
  onUseWithoutAccount,
  goToSignUp,
}) => {
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
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              withSecure
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="SIGN IN"
              onPress={onSignIn}
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
