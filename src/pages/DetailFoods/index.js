import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {PicDetails} from '../../assets';
import {colors, fonts, sizes} from '../../utils';
import {Rating} from '../../components';

const DetailFoods = () => {
  return (
    <View style={styles.container}>
      <Image source={PicDetails} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Cherry Healthy</Text>
        <Text style={styles.desc}>
          Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
          pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
          teratur.
        </Text>
        <Rating />
      </View>
    </View>
  );
};

export default DetailFoods;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  image: {
    width: 460,
    height: 330,
  },
  content: {
    paddingHorizontal: 16,
  },
  title: {
    color: colors.secondary,
    fontFamily: fonts[400],
    fontSize: sizes[16],
  },
  desc: {
    color: colors.secondary_bg,
    fontFamily: fonts[400],
    fontSize: sizes[14],
  },
});
