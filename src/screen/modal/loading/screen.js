import React, {Component} from 'react';
import {
  Animated,
  View,
  Text,
  Pressable,
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useCardAnimation} from '@react-navigation/stack';

function ModalScreen({navigation}) {
  const {current} = useCardAnimation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
        ]}
        // onPress={navigation.goBack}
      />
      <Animated.View
        style={{
          padding: 16,
          width: '90%',
          maxWidth: 400,
          borderRadius: 3,
          transform: [
            {
              scale: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <ActivityIndicator size="large" color="red" />
      </Animated.View>
    </View>
  );
}

export default ModalScreen;
