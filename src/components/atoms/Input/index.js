import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {colors, fonts, sizes} from '../../../utils';

const Input = ({title, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#8D92A3'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  title: {
    fontFamily: fonts[400],
    fontSize: sizes[16],
    color: colors.secondary,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: colors.secondary_variant,
    fontFamily: fonts[400],
    fontSize: sizes[14],
  },
  placeholderTextColor: {
    color: colors.secondary_bg,
  },
});
