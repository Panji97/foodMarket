import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Star1, Star5} from '../../../assets';
import {colors} from '../../../utils';

const Rating = () => {
  return (
    <View style={styles.content}>
      <View style={styles.star}>
        <Star1 />
        <Star1 />
        <Star1 />
        <Star1 />
        <Star5 />
      </View>
      <Text style={styles.rating}>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    maxWidth: 119,
  },
  star: {
    flexDirection: 'row',
  },
  rating: {
    color: colors.secondary_bg,
  },
});
