import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Text, Header, SelectItem, Space, FlatlistSelectItem} from '@components';
import Log from '@log';
import Config from 'react-native-config';
import {changeLanguage} from '@translations';
import * as Api from './api';
import {SafeAreaView} from 'react-native-safe-area-context';
import Resource from '../../../resource';

export default class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={Resource.images.background_select}>
        <SafeAreaView style={{flex: 1}}>
          <Header
            isRenderRight={false}
            onPressLeft={() => {
              this.props.navigation.pop();
            }}
          />
          <View style={{marginHorizontal: 16, flex: 1}}>
            <Space height={122} />
            <Text style={{fontSize: 22, color: 'white'}}>
              Wellcome to Nexle Entrance Test
            </Text>
            <Space height={10} />
            <Text style={{fontSize: 14, color: 'white'}}>
              Please select categories what you would like to see on your feed.
              You can set this later on Filter.
            </Text>
            <Space height={20} />
            <FlatlistSelectItem />
          </View>
          {/* <SelectItem /> */}
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
