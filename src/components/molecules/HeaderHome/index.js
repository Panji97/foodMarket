import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Pic} from '../../../assets';
import {colors, fonts, sizes} from '../../../utils';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>FoodMarket</Text>
        <Text style={styles.desc}>Let’s get some foods</Text>
      </View>
      <Image source={Pic} />
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingTop: 30,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: fonts[500],
    fontSize: sizes[22],
    color: colors.secondary,
  },
  desc: {
    fontFamily: fonts[300],
    fontSize: sizes[14],
    color: colors.secondary_bg,
  },
});
