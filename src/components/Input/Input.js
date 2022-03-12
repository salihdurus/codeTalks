import React from 'react';
import {TextInput} from 'react-native';

import styles from './Input.style';

const Input = ({text, isPassword = false, value, onType, iconName}) => {
  return (
    <TextInput
      style={styles.container}
      secureTextEntry={isPassword}
      onChangeText={onType}
      value={value}
      placeholder={text}
      placeholderTextColor={'white'}
    />
  );
};
export default Input;
