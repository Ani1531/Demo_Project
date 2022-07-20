import * as React from 'react';
import {View, Modal, Pressable, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

const Drawer = createDrawerNavigator();

export default class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfileMenu: false,
    };
  }
  componentDidMount = () => {
    this.props.navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            padding: 8,
          }}
          onPress={() => this.toggleProfileMenu()}>
          <FontAwesomeIcon size={22} icon={faUserCircle} color={'black'} />
        </Pressable>
      ),
    });
  };

  toggleProfileMenu = () => {
    this.setState({showProfileMenu: !this.state.showProfileMenu});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.showProfileMenu}>
          <ProfileScreen toggleProfileMenu={this.toggleProfileMenu} />
        </Modal>
        <View style={{height: '100%'}}>
          <Drawer.Navigator>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
          </Drawer.Navigator>
        </View>
      </View>
    );
  }
}
