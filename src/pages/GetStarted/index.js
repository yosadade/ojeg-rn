import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fonts} from '../../utils';
import {Button} from '../../components';
import {ILVehicle} from '../../assets/images';

const GetStarted = ({navigation}) => {
  const login = () => {
    navigation.navigate('Login');
  };

  const signUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.page}>
      <View>
        <Image source={ILVehicle} style={styles.ilustration} />
        <Text style={styles.lead}>Selamat Datang di O-JEG</Text>
      </View>
      <View>
        <Button
          title="Silahlan masuk jika anda sudah memiliki akun"
          titleBtn="Login"
          onPress={login}
        />
        <Button
          title="Silahlan masuk jika anda sudah memiliki akun"
          titleBtn="Sign Up"
          onPress={signUp}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ilustration: {
    width: 225,
    height: 125,
    backgroundColor: '#00B0FF',
  },
  lead: {
    fontSize: 17,
    fontFamily: fonts.primary[700],
    paddingTop: 10,
    textAlign: 'center',
    color: '#00B0FF',
  },
});
