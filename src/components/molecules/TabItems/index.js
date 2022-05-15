import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Home,
  HomeNormal,
  Order,
  OrderNormal,
  Profile,
  ProfileNormal,
} from '../../../assets';

const TabItems = ({title, active, onLongPress, onPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <Home /> : <HomeNormal />;
    }
    if (title === 'Order') {
      return active ? <Order /> : <OrderNormal />;
    }
    if (title === 'Profile') {
      return active ? <Profile /> : <ProfileNormal />;
    }
    return <HomeNormal />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default TabItems;
