import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@components';
import Log from '@log';
import Config from 'react-native-config';
import {changeLanguage} from '@translations';
import * as Api from './api';

class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>BASE SCREEN</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen;
