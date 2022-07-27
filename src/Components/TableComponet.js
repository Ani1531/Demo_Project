import React from 'react';
import {StyleSheet, ScrollView, Text, View, Pressable} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

class TableComponet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        'sl',
        'Purpose',
        'Expense Head',
        'Reimbursible',
        'Value',
        '',
        '',
      ],
      tableData: [
        ['1', '2', '3', '4', '2', '3', '4'],
        ['a', 'b', 'c', 'd', '2', '3', '4'],
        ['1', '2', '3', '456', '2', '3', '4'],
        ['a', 'b', 'c', 'd', '2', '3', '4'],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row
              data={state.tableHead}
              style={styles.head}
              widthArr={[50, 120, 150, 150, 120, 50, 50]}
              textStyle={styles.text}
            />
            <Rows
              data={state.tableData}
              widthArr={[50, 120, 150, 150, 120, 50, 50]}
              textStyle={styles.text}
            />
          </Table>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  head: {
    height: 40,
    backgroundColor: '#dfe4ea',
  },
  text: {
    margin: 6,
    fontSize: 20,
  },
});

export default TableComponet;
