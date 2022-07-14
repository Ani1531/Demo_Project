import React from 'react';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';

const Header = () => {
  return (
    <Image
      style={styles.tinyLogo}
      source={require('../assets/logo/snib_logo.png')}
    />
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
