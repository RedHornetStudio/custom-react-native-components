import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, PanResponder, Pressable, TouchableOpacity } from 'react-native';

import PanResponderTest from './components/PanResponderTest';
import CustomPressableRipple from './components/CustomPressableRipple';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <PanResponderTest></PanResponderTest> */}
      <CustomPressableRipple style={styles.button} contentContainerStyle={{ backgroundColor: 'green', borderRadius: 20, padding: 20 }}><Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text><Pressable onPress={() => console.log('aaaa')} style={ {backgroundColor: 'blue'} }><Text>bbbbbbbbbbbbbbbbbbb<Text></Text></Text></Pressable></CustomPressableRipple>
      <TouchableOpacity style={{ backgroundColor: 'red', padding: 30, }}><Text>Touch me!</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  button: {
    marginTop: 20,
  },
  pressable: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  }
});
