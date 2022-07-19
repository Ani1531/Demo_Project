import React from 'react';
import {TextInput, StyleSheet, View, Text, Pressable} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

export default class DatePickerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateInput: this.props.dateData,
    };
  }

  onDateChange = newDate => {
    this.setState({dateInput: newDate});
    this.props.onDateChange(newDate);
  };

  getGateFormat = () => {
    let d = this.state.dateInput;
    let datestring =
      d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    return datestring;
  };

  render() {
    return (
      <View style={styles.mainStyle}>
        <TextInput
          style={styles.input}
          value={this.getGateFormat()}
          onChangeText={value => console.log('someting chnage')}
        />
        <Pressable
          style={{
            width: '15%',
            alignContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.props.openDatePicker();
          }}>
          <FontAwesomeIcon size={40} icon={faCalendarAlt} color={'#74b9ff'} />
        </Pressable>
        <DatePicker
          modal
          open={this.props.showDatePicker}
          date={this.props.dateData}
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
    height: 50,
    flexDirection: 'row',
    margin: 12,
    borderWidth: 1,
  },
  input: {
    width: '85%',
    padding: 10,
    fontSize: 22,
  },
});
