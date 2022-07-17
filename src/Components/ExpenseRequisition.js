import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-native-date-picker';
const AccountData = [
  'Accounts - Cash & Bank',
  'Accounts - Something 001',
  'Accounts - Something 001',
  'Accounts - Something 001',
];

const StateData = ['Egypt', 'Canada', 'Australia', 'Ireland'];

const VerticalData = ['Admin', 'Banking - ATM', 'Banking - CACP'];

class ExpenseRequisition extends React.Component {
  renderDropDown = () => {
    return (
      <SelectDropdown
        data={AccountData}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={'Department'}
        search={true}
        buttonStyle={{borderWidth: 1, width: '100%', height: 50}}
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
  };

  renderVerticalDropDown = () => {
    return (
      <SelectDropdown
        data={VerticalData}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={'Vertical'}
        search={true}
        buttonStyle={{borderWidth: 1, width: '75%', height: 50}}
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
  };

  renderStateDropDown = () => {
    return (
      <SelectDropdown
        data={StateData}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={'State'}
        search={true}
        buttonStyle={{borderWidth: 1, width: '75%', height: 50}}
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
  };

  renderEmployeeDropDown = () => {
    return (
      <SelectDropdown
        data={StateData}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={'Empolyee Responsible'}
        search={true}
        buttonStyle={{borderWidth: 1, width: '100%', height: 50}}
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
  };

  render() {
    return (
      <View styles={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>
            Expense Requisition - Preparation
          </Text>
        </View>
        <ScrollView style={{flexShrink: 1}}>
          <View style={styles.eachFeildeStyle}>
            <View style={{paddingHorizontal: 4}}>
              <Text
                style={{paddingHorizontal: 10, fontSize: 16, color: 'black'}}>
                Requisition No
              </Text>
              <TextInput
                style={styles.input}
                value={''}
                onChangeText={value => console.log('someting chnage')}
              />
            </View>
            <View style={{paddingHorizontal: 4}}>
              <Text
                style={{
                  paddingVertical: 4,
                  paddingBottom: 6,
                  fontSize: 16,
                  color: 'black',
                }}>
                Requisition Date
              </Text>
              <TextInput
                style={styles.input}
                value={''}
                onChangeText={value => console.log('someting chnage')}
              />
            </View>
            <View style={{paddingHorizontal: 4}}>
              <Text
                style={{
                  paddingVertical: 4,
                  paddingBottom: 6,
                  fontSize: 16,
                  color: 'black',
                }}>
                For The Date
              </Text>
              <Pressable>
                <TextInput
                  style={styles.input}
                  value={''}
                  onChangeText={value => console.log('someting chnage')}
                />
              </Pressable>
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                paddingHorizontal: 12,
                paddingTop: 12,
              }}>
              <Text
                style={{
                  paddingHorizontal: 4,
                  paddingBottom: 6,
                  fontSize: 16,
                  color: 'black',
                }}>
                Department
              </Text>
              {this.renderDropDown()}
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                paddingHorizontal: 12,
                paddingVertical: 12,
              }}>
              <Text
                style={{
                  paddingHorizontal: 4,
                  paddingBottom: 6,
                  fontSize: 16,
                  color: 'black',
                }}>
                State
              </Text>
              {this.renderStateDropDown()}
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                paddingHorizontal: 12,
                paddingVertical: 12,
              }}>
              <Text
                style={{
                  paddingHorizontal: 4,
                  paddingBottom: 6,
                  fontSize: 16,
                  color: 'black',
                }}>
                Vertical
              </Text>
              {this.renderVerticalDropDown()}
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                paddingHorizontal: 12,
                paddingVertical: 12,
              }}>
              <Text
                style={{
                  paddingHorizontal: 4,
                  paddingBottom: 6,
                  fontSize: 16,
                  color: 'black',
                }}>
                Employee Responsibible
              </Text>
              {this.renderEmployeeDropDown()}
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                paddingHorizontal: 12,
                paddingVertical: 12,
              }}>
              <Text
                style={{
                  paddingHorizontal: 4,
                  paddingBottom: 6,
                  fontSize: 16,
                  color: 'black',
                }}>
                Vendor
              </Text>
              {this.renderEmployeeDropDown()}
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                paddingHorizontal: 12,
                paddingVertical: 12,
              }}>
              <Text
                style={{
                  paddingHorizontal: 4,
                  paddingBottom: 6,
                  fontSize: 16,
                  color: 'black',
                }}>
                Client
              </Text>
              {this.renderEmployeeDropDown()}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#e3e6f0',
    borderWidth: 0.5,
  },
  titleStyle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  eachFeildeStyle: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    width: '100%',
    marginBottom: 50,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ExpenseRequisition;
