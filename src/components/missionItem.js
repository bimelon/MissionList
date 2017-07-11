import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

export default class MissionItem extends Component {
  render(){
    return (
      <View style={styles.edge}>
        <TouchableHighlight onPress={() => {
          this.props.onPress(this.props.data.key)
        }}>
          <View style={styles.base}>
            <View style={styles.textArea}>
              <Text style={styles.title}>{this.props.data.title}</Text>
              <Text style={styles.number}>No.{this.props.data.key}</Text>
            </View>
            <Text style={styles.complete}>{this.props.data.clear?"◯":"✕"}</Text>
           </View>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  edge:{
    padding:1,
    backgroundColor:'#000000',
  },
  base:{
    padding:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor:'#FFFFFF',
  },
  textArea:{
    flexDirection:'column',
  },
  title:{
    fontSize:40,
    color:'#000000',
  },
  number:{
    fontSize:20,
    color:'#000000',
  },
  complete:{
    fontSize:60,
    color:'#000000',
  },
})
