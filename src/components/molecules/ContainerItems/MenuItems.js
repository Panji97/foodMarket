import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {PicMenu} from '../../../assets';
import {colors, fonts, sizes} from '../../../utils';
import {Rating} from '../../atoms';

const MenuItems = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={PicMenu} style={styles.image} />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Cherry Healthy</Text>
        <Rating />
      </View>
    </TouchableOpacity>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  container: {
    height: 210,
    width: 200,
    borderRadius: 15,
    backgroundColor: colors.primary,
    marginVertical: 24,
    marginRight: 2,
    marginLeft: 24,
    // shadow
    overflow: 'hidden',
    shadowColor: '#F2F2F2',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  image: {
    width: 200,
    height: 140,
  },
  contentWrapper: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 12,
    marginVertical: 12,
  },
  title: {
    fontFamily: fonts[400],
    fontSize: sizes[16],
    color: colors.secondary,
  },
});
