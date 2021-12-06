import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import CustomPressableRipple  from './components/CustomPressableRipple';

export default function App() {
  const [text, setText] = useState('');
  console.log(text);

  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: 'green' }}>Open up App.js to start working on your app!</Text>
      <CustomPressableRipple style={styles.button}>
        <Text style={styles.text}>pressableRipple</Text>
      </CustomPressableRipple>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'grey',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'blue',
    borderRadius: 25,
  },
  text: {
    color: 'white',
  },
});
