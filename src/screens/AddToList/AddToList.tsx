import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator, Platform } from 'react-native';
import { scale } from 'react-native-size-matters';

import Container from 'src/components/Container';
import Header from 'src/components/Header';

import styles from './styles';
import TextInput from 'src/components/TextInput';
import DismissKeyboard from 'src/components/DismissKeyboard';
import { white } from 'src/constants/colors';

interface IAddToListScreen {
  goBack: () => void;
  onDone: () => void;
  setTitle: (text: string) => void;
  title: string;
  loading: boolean;
  error: string;
};

const AddToListScreen = ({ goBack, onDone, title, setTitle, loading, error } : IAddToListScreen) => {
  const renderLeft = () => (
    <TouchableOpacity style={styles.buttonHeader} hitSlop={scale(10)} onPress={goBack}>
      <Text style={styles.buttonTextHeader}>Cancel</Text>
    </TouchableOpacity>
  );

  const renderRight = () => (
    <TouchableOpacity style={styles.buttonHeader} hitSlop={scale(10)} onPress={onDone}>
      <Text style={styles.buttonTextHeader}>Done</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Container>
        <DismissKeyboard>
          <Header
            title='Add new list item'
            renderLeft={renderLeft}
            renderRight={renderRight}
          />
          <View style={styles.container}>
            <Text style={styles.textTitle}>Add new list item</Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              additionStyles={styles.textInput}
              maxLength={30}
              placeholder='Title'
              returnKeyType="done"
              onSubmitEditing={onDone}
              error={error}
            />
          </View>
        </DismissKeyboard>
      </Container>
      {
        loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator color={white} size={Platform.OS === 'ios' ? 'large' : 36} />
          </View>
        )
      }
    </>
  );
}

export default AddToListScreen;
