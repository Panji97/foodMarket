import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Photo} from '../../../assets';

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={Photo} style={styles.image} />
      </View>
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  imageWrapper: {
    borderWidth: 1,
    borderStyle: 'dashed',
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
  },
});
