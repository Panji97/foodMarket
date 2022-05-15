import {View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const Gap = ({width, height, type}) => {
  return <View style={styles.container(type)} height={height} width={width} />;
};

export default Gap;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? colors.primary_bg : colors.primary,
    marginHorizontal: type === 'secondary' ? -24 : 0,
  }),
});
