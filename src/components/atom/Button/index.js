import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {fonts} from '../../../utils';

const Button = ({title, onPress, titleBtn}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.btnTitle}>{titleBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: '10rem',
    marginBottom: '6rem',
    paddingHorizontal: '50rem',
    color: '#44c5fc',
    textAlign: 'center',
  },
  button: {
    width: '225rem',
    paddingVertical: '15rem',
    borderRadius: '25rem',
    marginBottom: '33rem',
    backgroundColor: '#00B0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    fontSize: '12rem',
    fontFamily: fonts.primary[900],
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});
