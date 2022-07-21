import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import {StyleSheet} from 'react-native';

const LoaderSpinner = () => {
  return (
    <Modal animationType="fade" transparent={true} visible={false}>
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={90} color={'#1e90ff'} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    backgroundColor: 'rgba(99, 110, 114,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoaderSpinner;
