import React from 'react';
import {Image, View} from 'react-native';
import {StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.logoContainerStyle}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/logo/snib_logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
