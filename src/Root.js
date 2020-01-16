import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import ARScene from './components/ARScene';

class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="Root">          
          <Scene key="ARScene" component={ARScene} hideNavBar initial/>
        </Scene>
      </Router>
    );
  }
}

export default Root;