import React, { useRef } from 'react';
import { StyleSheet, View, Text, Animated, PanResponder } from 'react-native';

const PanResponderTest = props => {
  const pan = useRef(new Animated.ValueXY()).current;
  
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log(pan);
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  console.log(pan);

  return (
    <View style={styles.container}>
      <Text>Drag this box!</Text>
      <Animated.View style={[styles.box]} {...panResponder.panHandlers}></Animated.View>
      <Animated.View style={[styles.box2, { transform: [{ translateX: pan.x }, { translateY: pan.y }] }]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  }
});

export default PanResponderTest;