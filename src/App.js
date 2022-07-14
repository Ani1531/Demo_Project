import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './Components/HomeScreen';
import MenuContainer from './Components/MenuContainer';
import LoginScreen from './Components/LoginScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>{this.installNavigator()}</NavigationContainer>
      </SafeAreaView>
    );
  }

  installNavigator() {
    return (
      <Stack.Navigator>
        {this.HomeScreenContainer()}
        {this.MenuContainer()}
        {this.LoginScreen()}
      </Stack.Navigator>
    );
  }

  HomeScreenContainer() {
    return (
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    );
  }

  MenuContainer() {
    return (
      <Stack.Screen
        name="MenuContainer"
        component={MenuContainer}
        options={{
          headerStyle: {
            backgroundColor: '#48dbfb', //Set Header color
          },
          headerShown: true,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    );
  }

  LoginScreen() {
    return (
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerStyle: {
            backgroundColor: '#48dbfb', //Set Header color
          },
          headerShown: true,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
});

export default App;
