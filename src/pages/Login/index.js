import React from 'react';
import {Text, View, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Header, Input, Button} from '../../components';
import {fonts} from '../../utils';
import {ILSmile} from '../../assets/images';
import {useSelector, useDispatch} from 'react-redux';
import {setForm} from '../../redux';

const Register = ({navigation}) => {
  const LoginReducer = useSelector((state) => state.LoginReducer);
  const dispatch = useDispatch();

  const handleBack = () => {
    navigation.goBack();
  };
  const handleLogin = () => {
    console.log(LoginReducer.form);
  };
  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };
  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.page}>
      <>
        <Header onPress={handleBack} />
        <View style={styles.wrapperIlustration}>
          <Image source={ILSmile} style={styles.ilustration} />
          <Text style={styles.title}>
            Silahkan mengisi data anda untuk masuk ke aplikasi O-JEG
          </Text>
        </View>
      </>
      <>
        <View style={styles.input}>
          <Input
            placeholder="Email"
            value={LoginReducer.form.email}
            onChangeText={(value) => onInputChange(value, 'email')}
          />
          <Input
            placeholder="Password"
            value={LoginReducer.form.password}
            onChangeText={(value) => onInputChange(value, 'password')}
          />
        </View>
        <View style={styles.button}>
          <Button titleBtn="Masuk" onPress={handleLogin} />
        </View>
      </>
    </View>
    // </ScrollView>
  );
};

export default Register;

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: '20rem',
    paddingVertical: '10rem',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  wrapperIlustration: {
    paddingHorizontal: '20rem',
  },
  ilustration: {
    width: '130rem',
    height: '130rem',
  },
  title: {
    fontSize: '14rem',
    fontFamily: fonts.primary[600],
    marginTop: '6rem',
    maxWidth: '200rem',
    color: '#00B0FF',
  },
});
