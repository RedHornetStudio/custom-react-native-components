import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const CustomInput = props => {

  if(props.inputType !== undefined) {
    if(typeof props.inputType !== 'string') {
      throw 'inpuType must be a string';
    } else if(props.inputType === '') {
      throw 'inputType must be a non empty string';
    } else if(props.inputType !== 'numbers' &&
        props.inputType !== 'decimal' && 
        props.inputType !== 'upercase-letters' && 
        props.inputType !== 'lowercase-letters' && 
        props.inputType !== 'letters') {
          throw `no such inputType: ${props.inputType}`;
    }
  }

  const handleOnChageText = (text) => {
    switch (props.inputType) {
      case 'numbers':
        text = text.replace(/[^0-9]/g, '');
        break;
      case 'decimal':
        text = text.replace(/[^0-9.]/g, '');
        break;
      case 'upercase-letters':
        text = text.replace(/[^A-Z]/g, '');
        break;
      case 'lowercase-letters':
        text = text.replace(/[^a-z]/g, '');
        break;
      case 'letters':
        text = text.replace(/[^A-z]/g, '');
        break;
    }
    if(props.onChangeText) props.onChangeText();
  };

  return (
    <TextInput {...props} style={[styles.textInput, props.style]} onChangeText={handleOnChageText} />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  }
});

export default CustomInput;