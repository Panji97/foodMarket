import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, fonts, sizes} from '../../utils';
import {Logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Food Market</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_bg_variant,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: sizes[32],
    fontFamily: fonts[500],
    color: colors.secondary,
    marginTop: 37.81,
  },
});
