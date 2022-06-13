import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

const TestScreen = forwardRef((props, ref) => {
  const [value, setValue] = useState('');
  const moveText = useRef(new Animated.Value(0)).current;
  const emailInputRef = React.useRef(null);

  useEffect(() => {
    if (value !== '') {
      moveTextTop();
    } else if (value === '') {
      moveTextBottom();
    }
  }, [value]);

  // useImperativeHandle(ref, () => ({
  //   getValue: () => value,
  // }));

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return value;
    },
  }));

  // React.useEffect(() => {
  //   emailInputRef.current.focus();
  // }, []);

  const onChangeText = text => {
    setValue(text);
  };

  const onFocusHandler = () => {
    if (value !== '') {
      moveTextTop();
    }
  };

  const onBlurHandler = () => {
    if (value === '') {
      moveTextBottom();
    }
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        ref={emailInputRef}
        autoCapitalize={'none'}
        style={styles.input}
        value={value}
        onChangeText={text => onChangeText(text)}
        editable={true}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
      />
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            emailInputRef.current.focus();
          }}>
          <Text style={styles.label}>{props.label}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
});
export default TestScreen;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#647FFF',
    borderRadius: 2,
    width: '100%',
    alignSelf: 'center',
  },
  icon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 13,
    height: 35,
    color: 'white',
  },
  label: {
    color: 'grey',
    fontSize: 12,
  },
  animatedStyle: {
    bottom: 15,
    position: 'absolute',
    zIndex: 10000,
  },
});
