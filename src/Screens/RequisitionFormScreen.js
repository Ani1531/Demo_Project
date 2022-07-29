import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Modal,
} from 'react-native';
import DatePickerView from '../Components/DatePickerView';
import SelectDropDown from '../Components/SelectDropDown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faXmarkCircle,
  faPlusCircle,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import IconButton from '../Components/IconButton';
import UploadPopup from '../Components/UploadPopup';
import TableComponet from '../Components/TableComponet';

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
      reqNO: '00',
      reqData: '',
      forDate: '',
      department: '',
      state: '',
      vertical: '',
      empResp: '',
      client: '',
      purpose: '',
      expHead: '',
      reimbusable: 'No',
      value: '0',
      isDisabled: true,
      showUpldPopup: false,
    };
  }

  onReqDateChange = newDate => {
    this.setState({reqData: newDate});
  };

  onForDateChange = newDate => {
    this.setState({forDate: newDate});
  };

  getDepertment = value => {
    this.setState({department: value});
  };

  getState = value => {
    this.setState({state: value});
  };

  getVertical = value => {
    this.setState({vertical: value});
  };

  getEmplyResp = value => {
    this.setState({empResp: value});
  };

  getClient = value => {
    this.setState({client: value});
  };

  getPurpose = value => {
    this.setState({purpose: value});
  };

  getExpHead = value => {
    this.setState({expHead: value});
  };

  getReimbusable = value => {
    this.setState({reimbusable: value});
  };

  getValue = value => {
    console.log(value);
    this.setState({value: value});
  };

  toggleUploadPopup = () => {
    this.setState({showUpldPopup: !this.state.showUpldPopup});
  };

  AddRequsition = () => {
    console.log('clicked add button', JSON.stringify(this.state));
  };

  renderUploadButton = () => {
    return (
      <View style={styles.upldCntnr}>
        <Pressable
          style={styles.upldBtnstyle}
          onPress={() => this.toggleUploadPopup()}>
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
      <View style={{flex: 1}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.showUpldPopup}>
          <UploadPopup toggleUploadPopup={this.toggleUploadPopup} />
        </Modal>
        <View styles={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>
              Expense Requisition - Preparation
            </Text>
            <Pressable
              style={{padding: 4}}
              onPress={() => this.props.navigation.goBack()}>
              <FontAwesomeIcon
                size={22}
                icon={faXmarkCircle}
                color={'#2e86de'}
              />
            </Pressable>
          </View>
          <ScrollView style={{flexShrink: 1}}>
            <View style={styles.eachFeildeStyle}>
              <View style={styles.maineach}>
                <View style={{width: '35%'}}>
                  <Text style={styles.inputTitleStyle}>Requisition No</Text>
                </View>
                <Text style={[styles.input, {borderWidth: 0}]}>
                  {this.state.reqNO}
                </Text>
              </View>
              <View style={styles.maineach}>
                <View style={{width: '35%'}}>
                  <Text style={styles.dateTitleStyle}>Requisition Date</Text>
                </View>
                <DatePickerView
                  isDisabled={true}
                  onDateChange={this.onReqDateChange}
                />
              </View>
              <View style={styles.maineach}>
                <View style={{width: '35%'}}>
                  <Text style={styles.dateTitleStyle}>For The Date</Text>
                </View>
                <DatePickerView
                  isDisabled={false}
                  onDateChange={this.onForDateChange}
                />
              </View>

              <SelectDropDown
                DATA={AccountData}
                ButtonTitle={'Department'}
                dropdownStyle={styles.dropdownStyle}
                getSelectedValue={this.getDepertment}
              />

              <SelectDropDown
                DATA={StateData}
                ButtonTitle={'State'}
                dropdownStyle={styles.dropdownStyle}
                getSelectedValue={this.getState}
              />

              <SelectDropDown
                DATA={VerticalData}
                ButtonTitle={'Vertical'}
                dropdownStyle={styles.dropdownStyle}
                getSelectedValue={this.getVertical}
              />

              <SelectDropDown
                DATA={StateData}
                ButtonTitle={'Employee Responsible'}
                dropdownStyle={styles.dropdownStyle}
                getSelectedValue={this.getEmplyResp}
              />

              <SelectDropDown
                DATA={StateData}
                ButtonTitle={'Client'}
                dropdownStyle={styles.dropdownStyle}
                getSelectedValue={this.getClient}
              />
              {this.renderUploadButton()}
              <View style={styles.separator} />

              <View style={styles.maineach}>
                <View style={{width: '35%'}}>
                  <Text style={styles.inputTitleStyle}>Purpose</Text>
                </View>
                <TextInput
                  style={styles.input}
                  value={this.state.purpose}
                  onChangeText={value => this.getPurpose(value)}
                />
              </View>

              <SelectDropDown
                DATA={StateData}
                ButtonTitle={'Expense Head'}
                dropdownStyle={styles.dropdownStyle}
                getSelectedValue={this.getExpHead}
              />

              <SelectDropDown
                DATA={['YES', 'NO']}
                defaultValue={'NO'}
                ButtonTitle={'Reimbursable'}
                dropdownStyle={styles.dropdownStyle}
                getSelectedValue={this.getReimbusable}
              />

              <View style={styles.maineach}>
                <View style={{width: '35%'}}>
                  <Text style={styles.inputTitleStyle}>Value</Text>
                </View>
                <TextInput
                  style={styles.input}
                  value={this.state.value}
                  onChangeText={value => this.getValue(value)}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.addBtnContnr}>
                <IconButton
                  BtnText={'Add'}
                  IconName={faPlusCircle}
                  TxtBckgrdClr={'rgba(9, 132, 227,0.7)'}
                  IconBckgrdClr={'rgba(9, 132, 227,1.0)'}
                  Action={this.AddRequsition}
                />
              </View>
              <TableComponet />
            </View>
          </ScrollView>
        </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e3e6f0',
    borderWidth: 0.5,
    flexDirection: 'row',
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
  maineach: {
    paddingHorizontal: 4,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 260,
    height: 50,
    marginVertical: 4,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  inputTitleStyle: {
    paddingVertical: 16,
    fontSize: 20,
    color: 'black',
  },
  dateTitleStyle: {
    fontSize: 20,
    color: 'black',
  },
  upldCntnr: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    marginVertical: 16,
    alignItems: 'flex-end',
  },
  dropdownStyle: {borderWidth: 1, width: 260, height: 50},
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
});

export default RequisitionFormScreen;
