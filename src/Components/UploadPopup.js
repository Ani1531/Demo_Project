import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faUpload} from '@fortawesome/free-solid-svg-icons';

class UploadPopup extends React.Component {
  render() {
    return (
      <Pressable
        style={styles.container}
        onPress={() => this.props.toggleUploadPopup()}>
        <Pressable style={styles.popupStyle} onPress={() => {}}>
          <Pressable style={styles.btnStyle}>
            <FontAwesomeIcon size={25} icon={faCamera} color={'black'} />
            <Text style={styles.btnTxtStyle}>Take Photo</Text>
          </Pressable>
          <Pressable style={styles.btnStyle}>
            <FontAwesomeIcon size={25} icon={faUpload} color={'black'} />
            <Text style={styles.btnTxtStyle}>Upload Documents</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupStyle: {
    maxWidth: 280,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  btnStyle: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  btnTxtStyle: {fontSize: 20, color: 'black', paddingLeft: 20},
});

export default UploadPopup;
