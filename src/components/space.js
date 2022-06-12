import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Resource from '../resource';

const Space = props => {
  const {height, width} = props;
  return <View style={{height: height, width: width}} />;
};

export default Space;
