import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark_orange,
  },
  logo_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_text: {
    fontSize: 35,
    color: 'white',
  },
  body_container: {
    flex: 0.9,
    bottom: 0,
  },
});
