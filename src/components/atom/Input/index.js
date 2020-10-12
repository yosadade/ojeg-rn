import React from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {fonts} from '../../../utils';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  onBlur,
  onFocus,
  icon,
  onPressIcon,
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
      <TouchableOpacity onPress={onPressIcon} style={styles.wrapperIcon}>
        <Image source={icon} style={styles.iconRight} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = EStyleSheet.create({
  container: {
    marginTop: '15rem',
    justifyContent: 'space-between',
  },
  textInput: {
    paddingVertical: '15rem',
    paddingHorizontal: '18rem',
    borderRadius: '25rem',
    borderWidth: '1rem',
    borderColor: '#eae3e3',
    fontSize: '13rem',
    fontFamily: fonts.primary[300],
    color: '#B1B7C2',
  },
  wrapperIcon: {
    marginLeft: 'auto',
    bottom: '32rem',
    right: '15rem',
  },
});
