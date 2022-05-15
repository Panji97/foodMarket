import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts, sizes} from '../../../utils';
import {ArrowBack} from '../../../assets';

const Header = ({title, desc, isBack, onPress}) => {
  if (isBack) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <ArrowBack />
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentWrapper: {
    marginLeft: 32.17,
  },
  title: {
    fontSize: sizes[22],
    fontFamily: fonts[500],
    color: colors.secondary,
  },
  desc: {
    fontFamily: fonts[300],
    fontSize: sizes[14],
    color: colors.secondary_variant,
  },
});
