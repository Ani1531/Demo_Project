import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Pressable, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
// import MenuContainer from './Components/MenuContainer';
import DashBoardScreen from './Screens/DashBoardScreen';
import LoginScreen from './Screens/LoginScreen';
import Header from './Components/Header';
import ProfileScreen from './Screens/ProfileScreen';
import {Provider} from 'react-redux';
import {Store} from './Redux/Store';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={Store}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>{this.installNavigator()}</NavigationContainer>
        </SafeAreaView>
      </Provider>
    );
  }

  installNavigator() {
    return (
      <Stack.Navigator>
        {this.LoginScreen()}
        {this.DashBoardScreen()}
        {this.ProfileScreen()}
      </Stack.Navigator>
    );
  }

  LoginScreen() {
    return (
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    );
  }

  DashBoardScreen() {
    return (
      <Stack.Screen
        name="DashBoardScreen"
        component={DashBoardScreen}
        options={{
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerShown: true,
          headerLeft: false,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    );
  }

  ProfileScreen() {
    return (
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerShown: true,
          headerLeft: false,
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
