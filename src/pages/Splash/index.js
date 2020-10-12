import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {fonts} from '../../utils';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('GetStarted');
  }, 3000);
  return (
    <View style={styles.page}>
      <Text style={styles.title}>OJEG</Text>
    </View>
  );
};

export default Splash;

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: '45rem',
    fontFamily: fonts.primary[900],
    color: '#00B0FF',
  },
});
