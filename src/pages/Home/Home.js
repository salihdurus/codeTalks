import React from 'react';
import {View, Text, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import parseContentData from '../../utils/parseContentData';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/Modal/ContentInputModal';
import RoomCard from '../../components/RoomCard';
import styles from './Home.style';

const Home = ({navigation}) => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        setContentList(parseContentData(contentData));
      });
  }, []);

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
      room_name: content,
    };
    database().ref('rooms/').push(contentObject);
  }
  const handlePress = ({room_name,id}) => {
    // const object = parseContentData(room_name);
    console.log(room_name,id);
    navigation.navigate('RoomScreen', {room_name, id});
  };
  const renderData = ({item}) => {
    return <RoomCard item={item} onPress={() => handlePress(item)} />;
  };
  return (
    <View style={styles.container}>
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        inputText="Oda adı..."
        onSend={handleSendContent}
      />
      <FlatList
        style={styles.list}
        data={contentList}
        renderItem={renderData}
        numColumns={2}
      />
      <FloatingButton icon={'plus'} onPress={handleInputToggle} />
    </View>
  );
};

export default Home;
