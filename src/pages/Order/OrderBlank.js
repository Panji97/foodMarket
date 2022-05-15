import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconOrder} from '../../assets';
import {Button} from '../../components';
import {colors, fonts, sizes} from '../../utils';

const OrderBlank = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <IconOrder />
      </View>
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Text style={styles.desc}>
        Seems like you have not ordered any food yet
      </Text>
      <Button title="Find Foods" />
    </View>
  );
};

export default OrderBlank;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 80,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30.67,
  },
  title: {
    color: colors.secondary,
    fontSize: sizes[20],
    fontFamily: fonts[400],
    textAlign: 'center',
    marginBottom: 6,
  },
  desc: {
    color: colors.secondary_bg,
    fontSize: sizes[14],
    fontFamily: fonts[300],
    textAlign: 'center',
    marginBottom: 30,
  },
});
