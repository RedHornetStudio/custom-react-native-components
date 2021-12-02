import React, { useRef } from 'react';
import { StyleSheet, Pressable, Animated } from 'react-native';

const CustomPressableOpacity = props => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.2,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const pressableProps = () => {
    const a = {...props};
    delete a.style;
    return a;
  };

  return (
    <Pressable {...pressableProps()} onPressIn={() => fadeOut()} onPressOut={() => fadeIn()}>
      <Animated.View style={[styles.customPressableOpacity, props.style, { opacity: fadeAnim }]}>
        {props.children}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  customPressableOpacity: {
    backgroundColor: 'transparent',
  }
});

export default CustomPressableOpacity;