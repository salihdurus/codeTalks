import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.dark_orange,
    position: 'absolute',
    width: 60,
    height: 60,
    right: 20,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.dark_orange,
  },
});
