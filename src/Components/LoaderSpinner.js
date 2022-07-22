import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, ActivityIndicator, Modal} from 'react-native';
import {StyleSheet} from 'react-native';

class LoaderSpinner extends React.Component {
  render() {
    console.log(this.props.LoaderReducer.showSpinner);
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.LoaderReducer.showSpinner}>
        <View style={styles.spinnerStyle}>
          <ActivityIndicator
            size={90}
            color={'#1e90ff'}
            disable={this.props.LoaderReducer.showSpinner}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    backgroundColor: 'rgba(99, 110, 114,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  const {LoaderReducer} = state;
  return {LoaderReducer};
}

export default connect(mapStateToProps, null)(LoaderSpinner);
