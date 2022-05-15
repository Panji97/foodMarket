import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input, ProfilePicture} from '../../components';
import {colors} from '../../utils';

const SignUp = ({navigation}) => {
  const continuePressed = () => {
    navigation.navigate('SignUpAddress');
  };

  const back = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Header title="Sign Up" desc="Register and eat" isBack onPress={back} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfilePicture />
        <Input title="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <Input title="Email Address" placeholder="Type your email address" />
        <Gap height={16} />
        <Input title="Password" placeholder="Type your password" />
        <Gap height={46} />
        <Button title="Continue" onPress={continuePressed} />
        <Gap height={100} />
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: colors.primary,
    flex: 1,
  },
});
