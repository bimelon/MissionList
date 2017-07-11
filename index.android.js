import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import App from './src/components/app';

const store = configureStore();

class missionList extends Component {
 render() {
   return (
      <Provider store={store}>
        <App />
      </Provider>
   );
 }
}

AppRegistry.registerComponent('missionList', () => missionList);
