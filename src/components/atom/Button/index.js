import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 10,
    marginBottom: 6,
    paddingHorizontal: '18%',
    color: '#00B0FF',
    textAlign: 'center',
  },
  button: {
    width: 225,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 33,
    backgroundColor: '#00B0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    fontSize: 12,
    fontFamily: fonts.primary[900],
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});
