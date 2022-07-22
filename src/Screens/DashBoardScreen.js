import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

class DashBoardScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dashboardStyle}>
          <Text>DASH BOARD</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dashboardStyle: {
    width: '100%',
    height: 150,
    backgroundColor: 'red',
  },
});

export default DashBoardScreen;
