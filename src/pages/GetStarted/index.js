import React from 'react';
import {Text, View, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {fonts} from '../../utils';
import {Button} from '../../components';
import {ILVehicle} from '../../assets/images';

const GetStarted = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
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
          onPress={() => handleGoTo('Login')}
        />
        <Button
          title="Atau silahkan daftar bila belum memiliki akun"
          titleBtn="Daftar"
          onPress={() => handleGoTo('Register')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    paddingVertical: '20rem',
    paddingHorizontal: '20rem',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ilustration: {
    width: '250rem',
    height: '150rem',
    backgroundColor: '#00B0FF',
  },
  lead: {
    fontSize: '17rem',
    fontFamily: fonts.primary[700],
    paddingTop: '10rem',
    textAlign: 'center',
    color: '#00B0FF',
  },
});
