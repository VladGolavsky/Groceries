import React, { useState } from 'react';
import { TextInput as RNTextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import { black } from 'src/constants/colors';
import { moderateScale } from 'react-native-size-matters';

type ITextInputComponent = {
  withSecure?: boolean;
  additionStyles?: ViewStyle;
};

const TextInput: React.FC<TextInputProps & ITextInputComponent> = ({ value, onChangeText, placeholder, withSecure = false, additionStyles = {} }) => {
  const [secure, setSecure] = useState(withSecure);

  const onSecureButtonPress = () => setSecure(!secure)

  return (
    <View style={[styles.container, additionStyles, styles.containerWithSecure]}>
      <RNTextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secure}
        onChangeText={onChangeText}
        underlineColorAndroid={'transparent'}
        style={[styles.textInput, withSecure && styles.textInputWithSecure]}
      />
      {
        withSecure && (
          <TouchableOpacity onPress={onSecureButtonPress} style={styles.secureButton} hitSlop={10}>
            <Icon name={!secure ? "eye" : "eye-slash"} size={moderateScale(20)} color={black} />
          </TouchableOpacity>
        )
      }
    </View>
  );
}

export default TextInput;
