import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import ExpenseRequisition from '../Components/ExpenseRequisition';

class HomeScreen extends React.Component {
  componentDidMount = () => {
    this.props.navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            padding: 8,
          }}>
          <FontAwesomeIcon size={22} icon={faBars} color={'black'} />
        </Pressable>
      ),
    });
  };
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
