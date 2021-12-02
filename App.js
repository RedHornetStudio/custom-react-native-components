import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomInput from './components/CustomInput';
import CustomCard from './components/CustomCard';

export default function App() {
  const [text, setText] = useState('');
  console.log(text);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <CustomCard style={styles.customCard}>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
        <Text>aaa</Text>
      </CustomCard>
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
  customCard: {
    marginVertical: 10,
    padding: 20,
  },
  customInput: {
    width: '50%',
  },
});
