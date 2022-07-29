import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

class SelectDropDown extends React.Component {
  getSelectedValue = value => {
    this.props.getSelectedValue(value);
  };

  render() {
    return (
      <View style={styles.dropDownStyle}>
        <View style={{width: '35%'}}>
          <Text
            style={{
              paddingHorizontal: 4,
              paddingBottom: 6,
              fontSize: 20,
              color: 'black',
            }}>
            {this.props.ButtonTitle}
          </Text>
        </View>
        <SelectDropdown
          data={this.props.DATA}
          onSelect={(selectedItem, index) => {
            this.getSelectedValue(selectedItem);
          }}
          defaultButtonText={this.props.ButtonTitle}
          defaultValue={this.props.defaultValue ?? null}
          search={true}
          buttonStyle={this.props.dropdownStyle}
          renderDropdownIcon={() => (
            <FontAwesomeIcon size={24} icon={faCaretDown} color={'black'} />
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
    paddingHorizontal: 4,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SelectDropDown;
