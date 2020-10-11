import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Header, Input, Button} from '../../components';
import {fonts} from '../../utils';
import {ILPayment} from '../../assets/images';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <>
          <Header onPress={handleBack} />
          <View style={styles.wrapperIlustration}>
            <Image source={ILPayment} style={styles.ilustration} />
            <Text style={styles.title}>
              Mohon mengisi beberapa data untuk proses daftar anda
            </Text>
          </View>
        </>
        <>
          <View style={styles.input}>
            <Input
              placeholder="Nama Lengkap"
              value={name}
              onChangeText={(value) => {
                setName(value);
                console.log('name : ', value);
              }}
            />
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(value) => {
                setEmail(value);
                console.log('email : ', value);
              }}
            />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
          </View>
          <View style={styles.button}>
            <Button titleBtn="Sign Up" onPress={handleSignUp} />
          </View>
        </>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
  },
  wrapperIlustration: {
    paddingHorizontal: 20,
  },
  ilustration: {
    width: 106,
    height: 115,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    marginTop: 6,
    maxWidth: 200,
    color: '#00B0FF',
  },
  input: {
    marginTop: 20,
  },
  button: {
    marginTop: 25,
  },
});
