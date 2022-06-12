import {Dimensions, StatusBar, Platform} from 'react-native';

export default class App {
  static screen = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  };
}
