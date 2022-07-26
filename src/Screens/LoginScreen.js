import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
  Animated,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserCircle, faUserLock} from '@fortawesome/free-solid-svg-icons';
import LoaderSpinner from '../Components/LoaderSpinner';
import {setBusy, setFree, setMenu} from '../Redux/Action';
import requestMngr from '../Commons/RequestMngr';
import localStorage from '../Commons/LocalStorage';

class LoginScreen extends React.Component {
  fadeAnim = new Animated.Value(0);

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      showError: false,
      errormgs: 'INVALID USER ID AND PASSWORD',
    };
  }

  componentDidMount = () => {
    Animated.timing(this.fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  onUserIdValueChange = data => {
    this.setState({userId: data, showError: false});
  };

  onPasswordValueChange = data => {
    this.setState({password: data, showError: false});
  };

  checkLogin = () => {
    let loginData = {
      loginId: this.state.userId,
      password: this.state.password,
    };
    requestMngr
      .getLogin(loginData)
      .then(res => res.json())
      .then(result => {
        let userData = result.data.user;
        if (userData.login_user_name != 'Error') {
          this.props.setFree();
          requestMngr
            .getMenu(result.data.token)
            .then(res => res.json())
            .then(result => {
              this.props.setMenu(result);
              this.props.navigation.navigate('HomeScreen');
            })
            .catch(function (error) {
              console.log('error', error);
            });
        } else {
          this.setState(
            {
              showError: true,
              errormgs: 'INVALID USER ID AND PASSWORD',
              userId: '',
              password: '',
            },
            () => this.props.setFree(),
          );
        }
      })
      .catch(function (error) {
        this.props.setFree();
        console.log('error', error);
      });
  };

  onSignInPress = () => {
    this.props.setBusy();
    if (this.state.userId == '' || this.state.password == '') {
      this.setState(
        {
          showError: true,
          errormgs: 'PLEASE ENTER THE FEILDS',
          userId: '',
          password: '',
        },
        () => {
          this.props.setFree();
        },
      );
    } else {
      this.checkLogin();
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
            secureTextEntry={true}
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
        <Text style={{fontSize: 16, color: 'red'}}>{this.state.errormgs}</Text>
      </View>
    ) : null;
  };

  render() {
    return (
      <ScrollView>
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
          <Animated.View style={[{opacity: this.fadeAnim}]}>
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
                // paddingVertical: 16,
              }}>
              <Text style={{fontSize: 22, color: 'blue'}}>
                Forget password!
              </Text>
            </View>
          </Animated.View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#dfe6e9',
    paddingTop: 90,
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

function mapStateToProps(state) {
  const {LoaderReducer} = state;
  return {LoaderReducer};
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({setBusy, setFree, setMenu}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
