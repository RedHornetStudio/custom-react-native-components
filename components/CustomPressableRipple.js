import React, { useRef } from 'react';
import { StyleSheet, Pressable, Animated, View } from 'react-native';

const CustomPressableOpacity = props => {
  const sizeAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const sizeUp = () => {
    sizeAnim.setValue(0);
    opacityAnim.setValue(0);
    Animated.parallel([
      Animated.timing(sizeAnim, {
        toValue: 1000,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.2,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();
  };

  const fadeOut = () => {
    Animated.parallel([
      Animated.timing(sizeAnim, {
        toValue: 1000,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      })
    ]).start();
  };

  const style = (style) => {
    if(style) {
      return {
        borderRadius: style.borderRadius,
        borderTopLeftRadius: style.borderTopLeftRadius,
        borderTopStartRadius: style.borderTopStartRadius,
        borderTopEndRadius: style.borderTopEndRadius,
        borderTopRightRadius: style.borderTopRightRadius,
        borderTopLeftRadius: style.borderTopLeftRadius,
        borderTopStartRadius: style.borderTopStartRadius,
        borderTopEndRadius: style.borderTopEndRadius,
        borderTopRightRadius: style.borderTopRightRadius,
      }
    }
  };

  const pressableProps = () => {
    const a = {...props};
    delete a.style;
    return a;
  };

  return (
    <Pressable {...pressableProps()} onPressIn={() => sizeUp()} onPressOut={() => fadeOut()}>
      <View style={[styles.customPressableOpacity, props.style]}>
        <View style={[styles.rippleContainer, style(props.style)]}>
          <Animated.View style={[styles.ripple, { opacity: opacityAnim }, { transform: [{ scale: sizeAnim }] }]}></Animated.View>
        </View>
        {props.children}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  customPressableOpacity: {
    backgroundColor: 'transparent',
  },
  rippleContainer: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  ripple: {
    width: 4,
    height: 4,
    borderRadius: 4 / 2,
    backgroundColor: '#000000',
  }
});

export default CustomPressableOpacity;