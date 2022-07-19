import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import DatePickerView from './DatePickerView';
import SelectDropDown from './SelectDropDown';

const AccountData = [
  'Accounts - Cash & Bank',
  'Accounts - Something 001',
  'Accounts - Something 001',
  'Accounts - Something 001',
];

const StateData = ['Egypt', 'Canada', 'Australia', 'Ireland'];

const VerticalData = ['Admin', 'Banking - ATM', 'Banking - CACP'];

class ExpenseRequisition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
      dateData: new Date(),
    };
  }

  openDatePicker = () => {
    this.setState({showDatePicker: !this.state.showDatePicker});
  };

  onDateChange = newDate => {
    this.setState({date: newDate, showDatePicker: false});
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
                  paddingHorizontal: 10,
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
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  paddingBottom: 6,
                  fontSize: 16,
                  color: 'black',
                }}>
                For The Date
              </Text>
              <DatePickerView
                openDatePicker={this.openDatePicker}
                showDatePicker={this.state.showDatePicker}
                dateData={this.state.dateData}
                onDateChange={this.onDateChange}
              />
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
              <SelectDropDown
                DATA={AccountData}
                ButtonTitle={'Department'}
                dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
              />
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
              <SelectDropDown
                DATA={StateData}
                ButtonTitle={'State'}
                dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
              />
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
              <SelectDropDown
                DATA={VerticalData}
                ButtonTitle={'Vertical'}
                dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
              />
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
              <SelectDropDown
                DATA={StateData}
                ButtonTitle={'Employee'}
                dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
              />
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
              <SelectDropDown
                DATA={StateData}
                ButtonTitle={'State'}
                dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
              />
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
              <SelectDropDown
                DATA={StateData}
                ButtonTitle={'State'}
                dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
              />
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
