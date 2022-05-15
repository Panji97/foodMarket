import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import MenuItems from './MenuItems';

const ContainerItems = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
      </ScrollView>
    </View>
  );
};

export default ContainerItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_bg,
    flexDirection: 'row',
    marginHorizontal: -24,
    paddingHorizontal: 24,
  },
});
