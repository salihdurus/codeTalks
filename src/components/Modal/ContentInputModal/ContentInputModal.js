import React from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import styles from './ContentInputModal.style';
import Button from '../../Button';

const ContentInputModal = ({visible, onClose, onSend , inputText}) => {
  const [text, setText] = React.useState(null);

  function handleSend() {
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection={'down'}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder={inputText}
            onChangeText={setText}
            multiline
          />
        </View>
        <Button text={'Ekle'} onPress={handleSend} />
      </View>
    </Modal>
  );
};
export default ContentInputModal;
