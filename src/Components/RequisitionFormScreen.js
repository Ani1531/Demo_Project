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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle, faUpload} from '@fortawesome/free-solid-svg-icons';
import IconButton from './IconButton';

const AccountData = [
  'Accounts - Cash & Bank',
  'Accounts - Something 001',
  'Accounts - Something 001',
  'Accounts - Something 001',
];

const StateData = ['Egypt', 'Canada', 'Australia', 'Ireland'];

const VerticalData = ['Admin', 'Banking - ATM', 'Banking - CACP'];

class RequisitionFormScreen extends React.Component {
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

  AddRequsition = () => {
    console.log('clicked add button');
  };

  renderUploadButton = () => {
    return (
      <View style={styles.upldCntnr}>
        <Pressable style={styles.upldBtnstyle}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <FontAwesomeIcon size={22} icon={faUpload} color={'#2e86de'} />
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 16,
                color: '#2e86de',
              }}>
              Upload Documents
            </Text>
          </View>
        </Pressable>
      </View>
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
              <Text style={styles.inputTitleStyle}>Requisition No</Text>
              <TextInput
                style={styles.input}
                value={''}
                onChangeText={value => console.log('someting chnage')}
              />
            </View>
            <View style={{paddingHorizontal: 4, paddingVertical: 8}}>
              <Text style={styles.dateTitleStyle}>Requisition Date</Text>
              <DatePickerView
                isDisabled={true}
                openDatePicker={this.openDatePicker}
                showDatePicker={this.state.showDatePicker}
                dateData={this.state.dateData}
                onDateChange={this.onDateChange}
              />
            </View>
            <View style={{paddingHorizontal: 4}}>
              <Text style={styles.dateTitleStyle}>For The Date</Text>
              <DatePickerView
                isDisabled={false}
                openDatePicker={this.openDatePicker}
                showDatePicker={this.state.showDatePicker}
                dateData={this.state.dateData}
                onDateChange={this.onDateChange}
              />
            </View>

            <SelectDropDown
              DATA={AccountData}
              ButtonTitle={'Department'}
              dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
            />

            <SelectDropDown
              DATA={StateData}
              ButtonTitle={'State'}
              dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
            />

            <SelectDropDown
              DATA={VerticalData}
              ButtonTitle={'Vertical'}
              dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
            />

            <SelectDropDown
              DATA={StateData}
              ButtonTitle={'Employee Responsible'}
              dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
            />

            <SelectDropDown
              DATA={StateData}
              ButtonTitle={'Client'}
              dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
            />

            <SelectDropDown
              DATA={StateData}
              ButtonTitle={'State'}
              dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
            />
            {this.renderUploadButton()}
            <View style={styles.separator} />

            <View style={{paddingHorizontal: 4}}>
              <Text style={styles.inputTitleStyle}>Purpose</Text>
              <TextInput
                style={styles.input}
                value={''}
                onChangeText={value => console.log('someting chnage')}
              />
            </View>

            <SelectDropDown
              DATA={StateData}
              ButtonTitle={'Expense Head'}
              dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
            />

            <SelectDropDown
              DATA={StateData}
              ButtonTitle={'Expense Head'}
              dropdownStyle={{borderWidth: 1, width: '100%', height: 50}}
            />
            <View style={styles.addBtnContnr}>
              <IconButton
                BtnText={'Add'}
                IconName={faPlusCircle}
                TxtBckgrdClr={'rgba(9, 132, 227,0.7)'}
                IconBckgrdClr={'rgba(9, 132, 227,1.0)'}
                Action={this.AddRequsition}
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
    paddingVertical: 16,
    width: '100%',
    marginBottom: 50,
  },
  input: {
    height: 50,
    marginHorizontal: 12,
    marginVertical: 4,
    borderWidth: 1,
    padding: 10,
  },
  inputTitleStyle: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  dateTitleStyle: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  dropDownStyle: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  upldCntnr: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    marginVertical: 16,
  },
  upldBtnstyle: {
    width: 190,
    height: 50,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#2e86de',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 12,
  },
  addBtnContnr: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    marginVertical: 16,
  },
  // addbtnStyle: {
  //   width: 120,
  //   height: 50,
  //   borderWidth: 2,
  //   borderRadius: 8,
  //   borderColor: '#2e86de',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  // },
});

export default RequisitionFormScreen;
