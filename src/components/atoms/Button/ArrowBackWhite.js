import {StyleSheet, View} from 'react-native';
import React from 'react';

const ArrowBackWhite = () => {
  return (
    <View style={styles.arrow}>
      <ArrowBackWhite />
    </View>
  );
};

export default ArrowBackWhite;

const styles = StyleSheet.create({
  arrow: {
    // position: 'absolute',
    zIndex: 2,
    marginLeft: 24,
    marginTop: 26,
  },
});
