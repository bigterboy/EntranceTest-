import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Resource from '../resource';
import LinearGradient from 'react-native-linear-gradient';

const SelectItem = props => {
  const {item} = props;
  const [isCheck, setIsCheck] = useState(false);

  const changeSelect = () => {
    setIsCheck(!isCheck);
  };

  const renderItemNormal = () => {
    return (
      <TouchableOpacity onPress={() => changeSelect()}>
        <View
          style={{
            borderWidth: 1,
            width: 108,
            height: 71,
            borderRadius: 8,
            borderColor: 'rgba(255, 255, 255, 0.12)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemSelected = () => {
    return (
      <TouchableOpacity onPress={() => changeSelect()}>
        <LinearGradient
          colors={['#8A32A9', '#8A00FF']}
          style={{
            borderWidth: 1,
            width: 109,
            height: 71,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>{item.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return isCheck ? renderItemSelected() : renderItemNormal();
};

export default SelectItem;
