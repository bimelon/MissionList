import React,{Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableHighlight,
} from 'react-native'
import {TabNavigator} from 'react-navigation'

import MainTab from './MainTab'
import SubTab from './SubTab'

const TabView = TabNavigator({
  Main:{screen:MainTab,},
  Sub:{screen:SubTab,},
});

export default TabView;
