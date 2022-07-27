import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {MenuData} from '../Commons/Constant';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    // console.log(JSON.stringify(this.props.MenuReducer));
  };

  renderTabBars = () => {
    return MenuData.map((item, key) => (
      <Pressable
        key={key}
        style={styles.tabStyle}
        onPress={() => {
          this.setSubMenu2Type(item);
        }}>
        <Text style={styles.tabTextStyle}>{item.title}</Text>
      </Pressable>
    ));
  };

  setSubMenu2Type = item => {
    this.setState({showSubmenu2: true, submenu2Type: item.data});
  };

  renderSubTabBars = () => {
    return (
      <View style={{flex: 1}}>
        {this.state.showSubmenu2 ? (
          <View style={styles.submenu2Style}>
            {this.state.submenu2Type.map((item, key) => (
              <Pressable
                key={key}
                style={styles.tab2Style}
                onPress={() => {
                  this.onClickAction(item);
                }}>
                <Text style={styles.tab2TextStyle}>{item}</Text>
              </Pressable>
            ))}
          </View>
        ) : null}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Pressable
          style={styles.dashboardStyle}
          onPress={() => {
            this.setState({submenu2Type: '', showSubmenu2: false});
          }}>
          <Text style={styles.dashTitle}>DASH BOARD</Text>
        </Pressable>
        <View style={{height: 12}} />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          {this.renderSubTabBars()}
          <View style={styles.subMenu}>{this.renderTabBars()}</View>
        </View>
      </View>
    );
  }

  onClickAction = item => {
    if (item == 'Preparation') {
      this.props.navigation.navigate('RequisitionFormScreen');
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  dashboardStyle: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(223, 230, 233,0.6)',
    borderColor: 'rgba(34, 47, 62,1.0)',
    borderWidth: 1,
  },
  dashTitle: {
    fontSize: 22,
    color: 'black',
  },
  subMenu: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(223, 230, 233,0.6)',
  },
  tabStyle: {
    marginHorizontal: 4,
    marginVertical: 8,
    backgroundColor: 'rgba(10, 189, 227,0.5)',
    borderRadius: 4,
    borderColor: 'rgba(10, 189, 227,1.0)',
    borderWidth: 1,
  },
  tabTextStyle: {
    marginHorizontal: 12,
    marginVertical: 8,
    color: 'white',
    fontSize: 16,
  },
  tab2Style: {
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: 'rgba(29, 209, 161,0.5)',
    borderRadius: 4,
    borderColor: 'rgba(29, 209, 161,1.0)',
    borderWidth: 1,
  },
  tab2TextStyle: {
    marginHorizontal: 12,
    marginVertical: 8,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  submenu2Style: {
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

function mapStateToProps(state) {
  const {MenuReducer} = state;
  return {MenuReducer};
}
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
