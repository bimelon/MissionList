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

class SubTab extends Component {
  static navigationOptions = {
    tabBarLabel: 'Sub',
  };

  render() {
    const {missions}=this.props;
    const filled=missions;
    //const filled=missions.filter((data)=>{return (data.importance==1)});
    return (
      <View>
        <FlatList
          data={filled}
          renderItem={({item}) => {return <MissionItem data={item}/>}}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
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
)(SubTab);
