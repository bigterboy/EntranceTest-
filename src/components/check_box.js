import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Resource from '../resource';
import {Space} from '@components';
const CheckBox = () => {
  const [isCheck, setIsCheck] = useState(false);

  const renderImage = () => {
    if (isCheck) {
      return (
        <Image
          source={Resource.images.check_box}
          style={{width: 23, height: 23}}
        />
      );
    }
    return (
      <Image
        source={Resource.images.without_check_box}
        style={{width: 23, height: 23}}
      />
    );
  };

  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center'}}
      onPress={() => {
        setIsCheck(!isCheck);
      }}>
      {renderImage()}
      <Space width={8} />
      <Text style={{color: 'white'}}>I am over 16 years of age</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default CheckBox;
