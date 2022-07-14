import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import MenuContainer from './src/MenuContainer';
import NotificationScreen from './src/NotificationScreen';

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
        {this.NotificationScreen()}
      </Stack.Navigator>
    );
  }

  HomeScreenContainer() {
    return (
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
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

  NotificationScreen() {
    return (
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
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
  sectionTitle: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  highlight: {
    fontSize: 32,
    fontWeight: '700',
  },
});

export default App;
