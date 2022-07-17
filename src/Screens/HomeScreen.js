import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

import ExpenseRequisition from '../Components/ExpenseRequisition';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ExpenseRequisition />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
