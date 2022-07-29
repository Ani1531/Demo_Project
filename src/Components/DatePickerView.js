import React from 'react';
import {TextInput, StyleSheet, View, Text, Pressable} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

export default class DatePickerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
      dateInput: new Date(),
    };
  }

  openDatePicker = () => {
    this.setState({showDatePicker: !this.state.showDatePicker});
  };

  onDateChange = newDate => {
    this.setState({dateInput: newDate});
    this.props.onDateChange(this.getGateFormat(newDate));
  };

  getGateFormat = () => {
    let d = this.state.dateInput;
    let datestring =
      d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    return datestring;
  };

  render() {
    return (
      <View
        style={[
          styles.mainStyle,
          {backgroundColor: this.props.isDisabled ? '#b2bec3' : null},
        ]}>
        <TextInput
          style={styles.input}
          value={this.getGateFormat()}
          onChangeText={value => console.log('someting chnage')}
        />
        {!this.props.isDisabled ? (
          <Pressable
            style={{
              width: '15%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.openDatePicker();
            }}>
            <FontAwesomeIcon size={40} icon={faCalendarAlt} color={'#2e86de'} />
          </Pressable>
        ) : null}
        <DatePicker
          modal
          open={this.state.showDatePicker}
          date={this.state.dateInput}
          onConfirm={date => {
            this.onDateChange(date);
          }}
          onCancel={() => {
            this.props.openDatePicker();
          }}
          mode={'date'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    width: 260,
    height: 50,
    flexDirection: 'row',
    // marginHorizontal: 12,
    marginVertical: 4,
    borderWidth: 1,
  },
  input: {
    width: '85%',
    padding: 10,
    fontSize: 20,
  },
});
