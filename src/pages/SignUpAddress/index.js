import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Button, Dropdown, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const SignUpAddress = ({navigation}) => {
  const signUpPressed = () => {
    navigation.replace('MainApp');
  };

  const back = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Header
        title="Address"
        desc="Make sure it’s valid"
        isBack
        onPress={back}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input title="Phone No." placeholder="Type your phone number" />
        <Gap height={16} />
        <Input title="Address" placeholder="Type your address" />
        <Gap height={16} />
        <Input title="House No." placeholder="Type your house number" />
        <Gap height={16} />
        <Dropdown title="City" placeholder="Select your city" />
        <Gap height={46} />
        <Button title="Sign Up Now" onPress={signUpPressed} />
        <Gap height={24} />
      </ScrollView>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: colors.primary,
  },
});
