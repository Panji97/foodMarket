import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {colors} from '../../utils';

const OrderAxist = () => {
  return (
    <View style={styles.container}>
      <Header title="Your Orders" desc="Wait for the best meal" />
    </View>
  );
};

export default OrderAxist;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: colors.primary,
    flex: 1,
  },
});
