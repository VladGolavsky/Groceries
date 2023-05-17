import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import TextInput from 'src/components/TextInput';
import Button from 'src/components/Button';
import { scale } from 'react-native-size-matters';

interface ISettingsModalScreen {
  showSettingsModal: boolean;
  closeModal: () => void;
  url: string;
  setUrl: (text: string) => void;
  logout: () => void;
  onApply: () => void;
  accessToken: string | null;
}

const SettingsModalScreen = ({
  showSettingsModal,
  closeModal,
  url,
  setUrl,
  logout,
  onApply,
  accessToken,
}: ISettingsModalScreen) => {
  return (
    <Modal
      isVisible={showSettingsModal}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      style={styles.modal}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonClose} onPress={closeModal}>
          <Icon name="close-outline" size={scale(25)} />
        </TouchableOpacity>
        <Text style={styles.placeholder}>
          Api url
        </Text>
        <TextInput
          value={url}
          onChangeText={setUrl}
          onSubmitEditing={onApply}
        />
        <View style={styles.buttonContainer}>
          <Button
            title='APPLY'
            onPress={onApply}
          />
        </View>
        {
          accessToken ? (
            <View style={styles.buttonContainer}>
              <Button
                title='LOGOUT'
                onPress={logout}
              />
            </View>
          ) : null
        }
      </View>
    </Modal>
  );
}

export default SettingsModalScreen;
