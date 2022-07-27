import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import {StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

class IconButton extends React.Component {
  render() {
    return (
      <Pressable
        style={[
          styles.btnStyle,
          {
            backgroundColor: this.props.TxtBckgrdClr,
            borderColor: this.props.TxtBckgrdClr,
          },
        ]}
        onPress={() => this.props.Action()}>
        <View
          style={{
            justifyContent: 'center',
            paddingHorizontal: 12,
            paddingVertical: 6,
            backgroundColor: this.props.IconBckgrdClr,
            alignItems: 'flex-end',
          }}>
          <FontAwesomeIcon
            size={22}
            icon={this.props.IconName}
            color={'white'}
          />
        </View>
        <Text
          style={{
            justifyContent: 'center',
            color: 'white',
            paddingHorizontal: 10,
            paddingVertical: 6,
            fontSize: 24,
          }}>
          {this.props.BtnText}
        </Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  btnStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    margin: 2,
    borderRadius: 4,
    borderWidth: 1,
  },
});

export default IconButton;
