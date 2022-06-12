import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {FloatingLabelInput, CheckBox, Space, Header} from '@components';
import Log from '@log';
import Config from 'react-native-config';
import {changeLanguage} from '@translations';
import * as Api from './api';
import Resource from '../../../resource';
import LinearGradient from 'react-native-linear-gradient';
import {vi} from 'translations/resources';
import {SafeAreaView} from 'react-native-safe-area-context';

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      errorMessage: '',
    };

    this.email = React.createRef();
    this.password = React.createRef();
  }

  requestApiSignUp = async () => {
    this.props.navigation.navigate('Login');
    // let response = await Api.requestApi(
    //   this.props.navigation,
    //   'Trung',
    //   'Huynh',
    //   this.email.current.getValue(),
    //   this.password.current.getValue(),
    //   () => {
    //     this.props.navigation.navigate('Login');
    //   },
    //   error => {
    //     errorMessage: 'Email or password not not valid';
    //   },
    // );
  };

  renderError = () => {
    if (this.state.errorMessage) {
      return (
        <View>
          <Space height={15} />
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        </View>
      );
    }
    return null;
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={Resource.images.background}>
        <View
          style={{
            flex: 1,
          }}>
          <SafeAreaView style={{flex: 1}}>
            <ScrollView
              style={{
                flex: 1,
              }}
              contentContainerStyle={{
                flexGrow: 1,
              }}>
              <Header />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignContent: 'flex-end',
                  marginHorizontal: 24,
                }}>
                <Text style={{color: 'white', fontSize: 24}}>
                  Let’s get you started!
                </Text>
                <Space height={40} />
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  keyboardVerticalOffset={60}>
                  <FloatingLabelInput ref={this.email} label={'Your email'} />
                  <Space height={50} />
                  <FloatingLabelInput
                    ref={this.password}
                    label={'Your password'}
                    secureTextEntry={true}
                  />
                  {this.renderError()}
                  <Space height={50} />
                </KeyboardAvoidingView>
                <CheckBox />
                <Space height={29} />
                <Text style={{color: 'white'}}>
                  By clicking Sign Up, you are indicating that you have read and
                  agree to the
                  <Text style={{color: '#647FFF'}}> Terms of Service </Text>
                  and<Text style={{color: '#647FFF'}}> Privacy Policy </Text>
                </Text>
                <Space height={40} />
                <TouchableOpacity
                  style={{width: '100%'}}
                  onPress={() => {
                    this.requestApiSignUp();
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}>
                    <Text style={{color: 'white', fontSize: 16}}>Sign Up</Text>
                    <Image
                      source={Resource.images.arrow_right}
                      style={{width: 54, height: 54}}
                    />
                  </View>
                  <Space height={18} />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    overflow: 'visible',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

export default Screen;
