// import React from 'react';
// import {StyleSheet} from 'react-native';
// import DatePicker from 'react-native-date-picker';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

// class DatePickerView extends React.Component {
//   render() {
//     return (
//       <DatePicker
//         modal
//         open={this.props.showDatePicker()}
//         date={this.props.dateData}
//         onConfirm={date => {
//           this.props.onDateChange(date);
//         }}
//         onCancel={() => {
//           this.props.showDatePicker();
//         }}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({});

// export default DatePickerView;

import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';

export default class DatePickerView extends React.Component {
  render() {
    return (
      <View style={styles.input}>
        <TextInput
          style={styles.input}
          value={this.props.dateData}
          onChangeText={value => console.log('someting chnage')}
        />
        <FontAwesomeIcon size={16} icon={faCalendar} color={'blue'} />
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
  input: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
