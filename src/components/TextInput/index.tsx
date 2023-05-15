import React, { ForwardedRef, useState } from 'react';
import { TextInput as RNTextInput, TextInputProps, TouchableOpacity, View, ViewStyle, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import { black, red } from 'src/constants/colors';
import { moderateScale } from 'react-native-size-matters';

type ITextInputComponent = {
  withSecure?: boolean;
  additionStyles?: ViewStyle;
  error?: string;
};

const TextInput = ({
  value,
  onChangeText,
  placeholder,
  withSecure = false,
  additionStyles = {},
  keyboardType = 'default',
  error = '',
  onSubmitEditing = () => {},
  returnKeyType = 'default',
  maxLength,
} : TextInputProps & ITextInputComponent, ref: ForwardedRef<RNTextInput>) => {
  const [secure, setSecure] = useState(withSecure);

  const onSecureButtonPress = () => setSecure(!secure)

  return (
    <>
      <View style={[styles.container, additionStyles, styles.containerWithSecure, error.length ? styles.containerWithError : {}]}>
        <RNTextInput
          ref={ref}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder={placeholder}
          value={value}
          secureTextEntry={secure}
          onChangeText={onChangeText}
          underlineColorAndroid={'transparent'}
          keyboardType={keyboardType}
          style={[styles.textInput, withSecure && styles.textInputWithSecure, error.length ? styles.textInputWithError : {}]}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
        />
        {
          withSecure && (
            <TouchableOpacity onPress={onSecureButtonPress} style={styles.secureButton} hitSlop={10}>
              <Icon name={!secure ? "eye" : "eye-slash"} size={moderateScale(20)} color={error.length ? red : black} />
            </TouchableOpacity>
          )
        }
      </View>
      {
        maxLength ? (
          <View>
            <Text style={styles.textCharactersLeft}>{`Characters left ${maxLength - (value?.length || 0)}`}</Text>
          </View>
        ) : <View />
      }
    </>
  );
}

export default React.forwardRef(TextInput);
