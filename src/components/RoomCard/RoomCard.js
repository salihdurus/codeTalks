import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './RoomCard.style';

const MessageCard = ({item, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.room_name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default MessageCard;
