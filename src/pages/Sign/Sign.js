import React from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import styles from './Sign.style';
import Button from '../../components/Button';
import Input from '../../components/Input';

const initialFormValues = {
  email: null,
  password: null,
  re_password: null,
};

const Sign = ({navigation}) => {
  const handleFormSubmit = async formValues => {
    if (
      !formValues.email ||
      !formValues.password ||
      !formValues.re_password ||
      formValues.password != formValues.re_password
    ) {
      showMessage({
        message: 'Boş alan bıraktınız veya şifre ile şifre tekrarı uyuşmuyor !',
        type: 'warning',
      });
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      showMessage({
        message: 'Başarıyla kayıt olundu !',
        type: 'success',
      });

      navigation.navigate('LoginScreen');
    } catch (error) {
      showMessage({
        message: error.code,
        type: 'danger',
      });
    }
  };

  return (
    <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
      {({handleChange, values, handleSubmit}) => (
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
            <Input
              text={'şifrenizi tekrar giriniz..'}
              isPassword={true}
              value={values.re_password}
              onType={handleChange('re_password')}
            />
            <Button text={'Kayıt Ol'} onPress={handleSubmit} />
            <Button
              text={'Geri'}
              theme="secondary"
              onPress={navigation.goBack}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
export default Sign;
