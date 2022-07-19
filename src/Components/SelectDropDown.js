import React from 'react';
import {StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

class SelectDropDown extends React.Component {
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({});

export default SelectDropDown;
