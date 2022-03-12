import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light_orange,
  },
  welcome_container: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: 'white',
    borderRadius: 10,
  },
  welcome_message: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 17,
  },
});
