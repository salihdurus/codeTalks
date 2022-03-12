import React from 'react';
import {View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import ContentInputModal from '../../components/Modal/ContentInputModal';
import FloatingButton from '../../components/FloatingButton';
import styles from './Room.style';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/MessageCard';

const Room = ({route}) => {
  const {room_name} = route.params;
  const {id} = route.params;
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    sendContent(content);
    handleInputToggle();
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;
    const contentObject = {
      user: userMail.split('@')[0],
      message: content,
      date: new Date().toISOString(),
    };
    database().ref(`rooms/${id}/messages/`).push(contentObject);
  }

  React.useEffect(() => {
    database()
      .ref(`rooms/${id}/messages/`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        setContentList(parseContentData(contentData));
      });
  }, []);

  function handleMessages({item}) {
    return (
      <MessageCard user={item.user} date={item.date} message={item.message} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <View style={styles.welcome_container}>
            <Text style={styles.welcome_message}>
              {room_name} odası kuruldu!
            </Text>
          </View>
        )}
        data={contentList}
        renderItem={handleMessages}
      />
      <FloatingButton icon={'plus'} onPress={handleInputToggle} />
      <ContentInputModal
        inputText={'Mesajın'}
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </View>
  );
};
export default Room;
