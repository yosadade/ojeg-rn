import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {fonts} from '../../../utils';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  onBlur,
  onFocus,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#eae3e3"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        onFocus={onFocus}
        style={styles.textInput}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#eae3e3',
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: '#B1B7C2',
  },
});
