import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserCircle, faUserLock} from '@fortawesome/free-solid-svg-icons';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      showPasswordSection: false,
      showError: false,
    };
  }

  onValueChange = data => {
    if (this.state.showPasswordSection) {
      this.setState({password: data, showError: false});
    } else {
      this.setState({userId: data, showError: false});
    }
  };

  onNextPress = () => {
    if (this.state.userId == 'manoj') {
      this.setState({showPasswordSection: true, userId: '', password: ''});
    } else if (this.state.password == 'manoj') {
      this.props.navigation.navigate('HomeScreen');
    } else {
      this.setState({showError: true, userId: '', password: ''});
    }
  };

  renderErrorMgs = () => {
    return this.state.showError ? (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}>
        <Text style={{fontSize: 10, color: 'red'}}>
          INVALID USER ID AND PASSWORD
        </Text>
      </View>
    ) : null;
  };

  renderIDorPasswordInputBox = () => {
    return this.state.showPasswordSection ? (
      <TextInput
        style={styles.input}
        // autoFocus={true}
        value={this.state.password}
        onChangeText={value => this.onValueChange(value)}
        placeholder="Please Enter Password"
      />
    ) : (
      <TextInput
        style={styles.input}
        // autoFocus={true}
        value={this.state.userId}
        onChangeText={value => this.onValueChange(value)}
        placeholder="Please Enter Valid User ID"
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginPopupStyle}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 4,
            }}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/logo/snib_logo.png')}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 4,
              paddingBottom: 8,
            }}>
            <Text ststyle={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
              Sign In
            </Text>
          </View>
          {this.renderErrorMgs()}
          {this.renderIDorPasswordInputBox()}
          <View
            style={{
              padding: 8,
            }}>
            <Pressable
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                justifyContent: 'center',
                margin: 2,
                padding: 8,
                backgroundColor: '#0288D1',
                borderRadius: 4,
                borderWidth: 1,
                borderColor: '#0288D1',
              }}
              onPress={() => this.onNextPress()}>
              <View style={{justifyContent: 'center'}}>
                <FontAwesomeIcon
                  icon={
                    this.state.showPasswordSection ? faUserLock : faUserCircle
                  }
                  color={'white'}
                />
              </View>
              <Text
                style={{
                  justifyContent: 'center',
                  color: 'white',
                  paddingLeft: 4,
                }}>
                {this.state.showPasswordSection ? 'SignIn' : 'Next'}
              </Text>
            </Pressable>
          </View>
          <View style={{height: 1, backgroundColor: 'grey'}} />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 4,
            }}>
            <Text style={{fontSize: 10, color: 'black'}}>Forget password</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loginPopupStyle: {
    marginTop: 80,
    width: 350,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 18,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;
