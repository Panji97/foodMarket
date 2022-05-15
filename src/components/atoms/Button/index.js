import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts, sizes} from '../../../utils';

const Button = ({title, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary' ? colors.secondary_bg : colors.primary_bg_variant,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.secondary_variant,
  }),
  title: type => ({
    fontFamily: fonts[500],
    fontSize: sizes[16],
    color: type === 'secondary' ? colors.primary : colors.secondary,
  }),
});
