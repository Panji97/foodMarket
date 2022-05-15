import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const SignIn = ({navigation}) => {
  signInPressed = () => {
    navigation.replace('MainApp');
  };
  const createAccountPressed = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Header title="Sign In" desc="Find your best ever meal" />
      <Input title="Email Address" placeholder="Type your email address" />
      <Gap height={16} />
      <Input title="Password" placeholder="Type your password" />
      <Gap height={46} />
      <Button title="Sign In" onPress={signInPressed} />
      <Gap height={12} />
      <Button
        title="Create New Account"
        type="secondary"
        onPress={createAccountPressed}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    paddingHorizontal: 24,
  },
});
