import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

class SelectDropDown extends React.Component {
  render() {
    return (
      <View style={styles.dropDownStyle}>
        <Text
          style={{
            paddingHorizontal: 4,
            paddingBottom: 6,
            fontSize: 16,
            color: 'black',
          }}>
          {this.props.ButtonTitle}
        </Text>
        <SelectDropdown
          data={this.props.DATA}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={this.props.ButtonTitle}
          search={true}
          buttonStyle={this.props.dropdownStyle}
          renderDropdownIcon={() => (
            <FontAwesomeIcon size={16} icon={faCaretDown} color={'black'} />
          )}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dropDownStyle: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    paddingTop: 12,
  },
});

export default SelectDropDown;
