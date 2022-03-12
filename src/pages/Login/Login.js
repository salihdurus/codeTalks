import React from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import styles from './Login.style';
import Button from '../../components/Button';
import Input from '../../components/Input';

const initialFormValues = {
  email: null,
  password: null,
};

const Login = ({navigation}) => {
  function handleSignUp() {
    navigation.navigate('SignScreen');
  }

  async function handleFormSubmit(formValues) {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      navigation.navigate('HomeScreen');
    } catch (error) {
      showMessage({
        message: error.message,
        type: 'danger',
      });
    }
  }
  return (
    <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
      {({values, handleChange, handleSubmit}) => (
        <View style={styles.container}>
          <View style={styles.logo_container}>
            <Text style={styles.logo_text}>codetalks</Text>
          </View>
          <View style={styles.body_container}>
            <Input
              text={'e-postanızı giriniz..'}
              value={values.email}
              onType={handleChange('email')}
            />
            <Input
              text={'şifrenizi giriniz..'}
              isPassword={true}
              value={values.password}
              onType={handleChange('password')}
            />
            <Button text={'Giriş Yap'} onPress={handleSubmit} />
            <Button
              text={'Kayıt Ol'}
              theme="secondary"
              onPress={handleSignUp}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
export default Login;
