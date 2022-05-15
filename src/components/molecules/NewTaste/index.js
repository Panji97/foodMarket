import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import Items from '../Items';

const NewTaste = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </View>
    </ScrollView>
  );
};

export default NewTaste;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
});
