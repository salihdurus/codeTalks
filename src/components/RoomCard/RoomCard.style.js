import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1 / 2,
    minHeight: deviceSize.height / 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e0dadc',
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    color: colors.light_orange,
    margin: 5,
  },
});
