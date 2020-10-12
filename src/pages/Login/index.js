import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Header, Input, Button} from '../../components';
import {fonts} from '../../utils';
import {ILPayment, ILSmile} from '../../assets/images';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleBack = () => {
    navigation.goBack();
  };
  const handleSignUp = () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    navigation.navigate('Login', data);
    console.log('Register success dan kirim data ke Login');
    console.log(data);
    setName('');
    setEmail('');
    setPassword('');
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
            placeholder="Nama Lengkap"
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={styles.button}>
          <Button titleBtn="Masuk" onPress={handleSignUp} />
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
