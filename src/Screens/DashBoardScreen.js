import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {MenuData} from '../Commons/Constant';

class DashBoardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submenu2Type: [],
      showSubmenu2: false,
    };
  }

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
    return this.state.showSubmenu2 ? (
      <View style={styles.subMenu}>
        {this.state.submenu2Type.map((item, key) => (
          <Pressable
            key={key}
            style={styles.tab2Style}
            onPress={() => {
              console.log(item);
            }}>
            <Text style={styles.tab2TextStyle}>{item}</Text>
          </Pressable>
        ))}
      </View>
    ) : null;
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
        <View style={styles.subMenu}>{this.renderTabBars()}</View>
        <View style={{height: 12}} />
        {this.renderSubTabBars()}
      </View>
    );
  }
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
    justifyContent: 'flex-start',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(223, 230, 233,0.6)',
  },
  tabStyle: {
    marginHorizontal: 8,
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
    fontSize: 20,
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
    fontSize: 20,
  },
});

export default DashBoardScreen;
