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
import LoaderSpinner from '../Components/LoaderSpinner';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      showError: false,
      errormgs: 'INVALID USER ID AND PASSWORD',
      showInputSection: false,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({showInputSection: true});
    }, 1000);
  };

  onUserIdValueChange = data => {
    this.setState({userId: data, showError: false});
  };

  onPasswordValueChange = data => {
    this.setState({password: data, showError: false});
  };

  onSignInPress = () => {
    if (this.state.userId == 'manoj' && this.state.password == 'manoj') {
      this.props.navigation.navigate('MenuContainer');
    } else if (this.state.userId == '' || this.state.password == '') {
      this.setState({
        showError: true,
        errormgs: 'PLEASE ENTER THE FEILDS',
        userId: '',
        password: '',
      });
    } else {
      this.setState({
        showError: true,
        errormgs: 'INVALID USER ID AND PASSWORD',
        userId: '',
        password: '',
      });
    }
  };

  renderIDorPasswordInputBox = () => {
    return (
      <>
        <View style={{paddingVertical: 12}}>
          <Text style={{fontSize: 22, color: 'black', paddingLeft: 12}}>
            User Id
          </Text>
          <TextInput
            style={styles.input}
            // autoFocus={true}
            value={this.state.userId}
            onChangeText={value => this.onUserIdValueChange(value)}
            placeholder="Please Enter Valid User ID"
          />
        </View>
        <View>
          <Text style={{fontSize: 22, color: 'black', paddingLeft: 12}}>
            Password
          </Text>
          <TextInput
            style={styles.input}
            // autoFocus={true}
            value={this.state.password}
            onChangeText={value => this.onPasswordValueChange(value)}
            placeholder="Please Enter Password"
          />
        </View>
      </>
    );
  };

  renderErrorMgs = () => {
    return this.state.showError ? (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}>
        <Text style={{fontSize: 20, color: 'red'}}>{this.state.errormgs}</Text>
      </View>
    ) : null;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LoaderSpinner />
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
                marginVertical: 8,
              }}>
              <Text style={{fontSize: 26, color: 'black'}}>Sign In</Text>
            </View>
            {this.renderErrorMgs()}
            {this.renderIDorPasswordInputBox()}
            <View
              style={{
                width: 280,
                paddingTop: 20,
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
                onPress={() => this.onSignInPress()}>
                <View
                  style={{
                    justifyContent: 'center',
                    padding: 6,
                    backgroundColor: '#4262be',
                    alignItems: 'flex-end',
                  }}>
                  <FontAwesomeIcon icon={faUserCircle} color={'white'} />
                </View>
                <Text
                  style={{
                    justifyContent: 'center',
                    color: 'white',
                    padding: 6,
                    fontSize: 22,
                  }}>
                  {'SignIn'}
                </Text>
              </Pressable>
            </View>
            <View style={{height: 1, backgroundColor: 'grey', marginTop: 20}} />
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
    paddingTop: 100,
  },
  input: {
    width: 280,
    height: 50,
    margin: 10,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 20,
  },
  tinyLogo: {
    height: 120,
    width: 250,
  },
});

export default LoginScreen;
