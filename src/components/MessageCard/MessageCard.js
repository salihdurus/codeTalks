import React from 'react';
import {View, Text} from 'react-native';
import styles from './MessageCard.style';
import {formatDistance , parseISO } from 'date-fns'
import { tr } from 'date-fns/locale';

const MessageCard = ({message, date, user}) => {
    const formattedDate = formatDistance(parseISO(date),new Date(),{
        addSuffix: true,
        locale: tr,
    });
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.username}>{user}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <View style={styles.body_container}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};
export default MessageCard;
