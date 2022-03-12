import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const base_style = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    container: {
      ...base_style.container,
      backgroundColor: colors.light_orange,
    },
    text: {
      ...base_style.text,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      ...base_style.container,
      backgroundColor: 'white',
    },
    text: {
      ...base_style.text,
      color: colors.light_orange,
    },
  }),
};
