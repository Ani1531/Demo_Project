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
import axios from 'axios';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      showPasswordSection: false,
      showError: false,
      showInputSection: false,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({showInputSection: true});
    }, 1000);
  };

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
      this.props.navigation.navigate('MenuContainer');
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
        <Text style={{fontSize: 16, color: 'red'}}>
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
          {this.state.showInputSection ? (
            <>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 4,
                  paddingBottom: 8,
                }}>
                <Text style={{fontSize: 22, color: 'black'}}>Sign In</Text>
              </View>
              {this.renderErrorMgs()}
              {this.renderIDorPasswordInputBox()}
              <View
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 16,
                }}>
                <Pressable
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-end',
                    justifyContent: 'center',
                    margin: 2,
                    backgroundColor: '#4e73df',
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: '#4e73df',
                  }}
                  onPress={() => this.onNextPress()}>
                  <View
                    style={{
                      justifyContent: 'center',
                      padding: 6,
                      backgroundColor: '#4262be',
                    }}>
                    <FontAwesomeIcon
                      icon={
                        this.state.showPasswordSection
                          ? faUserLock
                          : faUserCircle
                      }
                      color={'white'}
                    />
                  </View>
                  <Text
                    style={{
                      justifyContent: 'center',
                      color: 'white',
                      padding: 6,
                      fontSize: 22,
                    }}>
                    {this.state.showPasswordSection ? 'SignIn' : 'Next'}
                  </Text>
                </Pressable>
              </View>
            </>
          ) : null}
          {this.state.showPasswordSection ? (
            <>
              <View style={{height: 1, backgroundColor: 'grey'}} />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 12,
                  paddingVertical: 16,
                }}>
                <Text style={{fontSize: 22, color: 'blue'}}>
                  Forget password!
                </Text>
              </View>
            </>
          ) : null}
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
    backgroundColor: '#dfe6e9',
  },
  loginPopupStyle: {
    marginTop: 180,
    // width: 320,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#dfe6e9',
    // borderRadius: 4,
    // paddingVertical: 32,
    // paddingHorizontal: 24,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 1,
    // elevation: 5,
  },
  input: {
    height: 50,
    margin: 20,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 20,
  },
  tinyLogo: {
    height: 90,
    width: 210,
  },
});

export default LoginScreen;
