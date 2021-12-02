import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomInput from './components/CustomInput';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <CustomInput style={styles.customInput} value={text} onChangeText={(text) => setText(text)} keyboardType="numeric" inputType="decimal" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
  },
  customInput: {
    width: '50%',
  },
});
