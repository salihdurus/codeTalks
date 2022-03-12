import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  header_container: {
    flexDirection: 'row',
  },
  username: {
    flex: 1,
  },
  date: {
    fontStyle: 'italic',
  },
  body_container: {
    marginTop: 10,
  },
  message: {
    color: 'black',
    fontWeight: 'bold',
  },
});
