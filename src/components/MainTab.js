import React,{Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableHighlight,
} from 'react-native'
import {TabNavigator} from 'react-navigation'

import MissionItem from './missionItem'

import { connect } from 'react-redux';
import {clearMission} from '../action/missions';


class MainTab extends Component {
  static navigationOptions = {
    tabBarLabel: 'Main',
  };

  state = {
    modalVisible: false,
    key:0,
  }

  setModalVisible(index) {
    this.setState({modalVisible: !this.state.modalVisible,key:index});
  }

  render() {
    const {missions}=this.props;
    const filled=missions.filter((data)=>{return (data.importance==0)});
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center',alignItems: 'center',margin: 40}}>
          <View style={{justifyContent: 'center',alignItems: 'center',width: 200, height: 100,marginTop: 22, backgroundColor: 'rgba(255,255,255,105)'}}>
            <Text>No.{this.state.key}</Text>

            <TouchableHighlight onPress={() => {
              this.props.clearMission(this.state.key);
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>
        <FlatList
          data={filled}
          renderItem={({item}) => {return <MissionItem data={item} onPress={()=>this.setModalVisible(item.key)}/>}}
        />
        <TouchableHighlight onPress={() => {
          this.setModalVisible(0)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    missions: state.missionsReducer.missions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearMission: (key) => dispatch(clearMission(key)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainTab);
