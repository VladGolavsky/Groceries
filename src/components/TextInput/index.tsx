import React from 'react';
import { TextInput as RNTextInput, TextInputProps, View, ViewStyle } from 'react-native';

import styles from './styles';

interface ITextInputComponent {
  secure?: boolean,
  additionStyles?: ViewStyle,
};

const TextInput: React.FC<TextInputProps & ITextInputComponent> = ({ value, onChangeText, placeholder, secure, additionStyles = {} }) => {
  return (
    <View style={[styles.container, additionStyles]}>
      <RNTextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid={'transparent'}
        style={[styles.textInput, secure && styles.textInputWithSecure]}
      />
    </View>
  );
}

export default TextInput;
