import React from 'react';
import {colors} from '../../utils';
import {ContainerItems, HeaderHome, TabSlider} from '../../components';
import {StyleSheet, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderHome />
      <ContainerItems />
      <TabSlider />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
});
