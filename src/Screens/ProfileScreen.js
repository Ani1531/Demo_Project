import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faGear,
  faList,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

class ProfileScreen extends React.Component {
  render() {
    return (
      <Pressable
        style={styles.container}
        onPress={() => this.props.toggleProfileMenu()}>
        <Pressable style={styles.popupStyle} onPress={() => {}}>
          <Pressable style={styles.btnStyle}>
            <FontAwesomeIcon size={25} icon={faUser} color={'black'} />
            <Text style={styles.btnTxtStyle}>Profile</Text>
          </Pressable>
          <Pressable style={styles.btnStyle}>
            <FontAwesomeIcon size={25} icon={faGear} color={'black'} />
            <Text style={styles.btnTxtStyle}>Settings</Text>
          </Pressable>
          <Pressable style={styles.btnStyle}>
            <FontAwesomeIcon size={25} icon={faList} color={'black'} />
            <Text style={styles.btnTxtStyle}>Activity Log</Text>
          </Pressable>
          <Pressable style={styles.btnStyle}>
            <FontAwesomeIcon
              size={25}
              icon={faRightFromBracket}
              color={'black'}
            />
            <Text style={styles.btnTxtStyle}>Logout</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(99, 110, 114,0.4)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 50,
    paddingRight: 40,
  },
  popupStyle: {
    maxWidth: 280,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  btnStyle: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'flex-start',
  },
  btnTxtStyle: {fontSize: 20, color: 'black', paddingLeft: 20},
});

export default ProfileScreen;
