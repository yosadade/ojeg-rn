import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ICBack} from '../../../assets/icons/index';

const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={ICBack} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = EStyleSheet.create({
  container: {
    paddingVertical: '10rem',
  },
  icon: {
    width: '25rem',
    height: '25rem',
  },
});
