import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
import {Menu} from '../../../assets';
import {Rating} from '../../atoms';
import {colors, fonts, sizes} from '../../../utils';

const Items = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <Image source={Menu} />
        <View style={styles.content}>
          <Text style={styles.title}>Soup Bumil</Text>
          <Text style={styles.idr}>IDR 289.000</Text>
        </View>
      </View>
      <Rating />
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  containerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginLeft: 12,
  },
  title: {
    fontFamily: fonts[400],
    fontSize: sizes[16],
    color: colors.secondary,
  },
  idr: {
    fontFamily: fonts[400],
    fontSize: sizes[13],
    color: colors.secondary_bg,
  },
});
