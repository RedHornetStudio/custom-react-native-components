import React from 'react';
import { StyleSheet, View } from 'react-native';

const CustomCard = ({ style, children }) => {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default CustomCard;