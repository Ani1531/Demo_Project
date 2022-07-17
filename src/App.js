import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Pressable, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import MenuContainer from './Components/MenuContainer';
import LoginScreen from './Screens/LoginScreen';
import Header from './Components/Header';
import ProfileScreen from './Screens/ProfileScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getProfileIcon = () => {
    console.log('NAVIGATION', JSON.stringify(this.props));
    return (
      <Pressable
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          padding: 8,
        }}
        onPress={() => console.log('open profile')}>
        <FontAwesomeIcon size={28} icon={faUserCircle} color={'blue'} />
      </Pressable>
    );
  };

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
        {this.LoginScreen()}
        {this.MenuContainer()}
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

  MenuContainer() {
    return (
      <Stack.Screen
        name="MenuContainer"
        component={MenuContainer}
        options={{
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerLeft: null,
          headerRight: () => this.getProfileIcon(),
          headerShown: true,
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
          headerLeft: null,
          headerRight: () => this.getProfileIcon(),
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
