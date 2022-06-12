import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Resource from '../resource';

const Header = props => {
  const {isRenderRight, onPressLeft} = props;

  const renderLeft = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (onPressLeft) {
            onPressLeft();
          }
        }}>
        <Image source={Resource.images.arrow} style={{width: 8, height: 14}} />
      </TouchableOpacity>
    );
  };

  const renderRight = () => {
    if (isRenderRight) {
      return (
        <TouchableOpacity>
          <Text style={{color: 'white'}}>DONE</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View
      style={{
        marginTop: 13,
        marginHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
      }}>
      {renderLeft()}
      {renderRight()}
    </View>
  );
};

export default Header;
