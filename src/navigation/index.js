import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNav} from '../components';
import {
  Splash,
  SignIn,
  SignUp,
  SignUpAddress,
  Home,
  Order,
  Profile,
  DetailFoods,
  OrderBlank,
} from '../pages';

const Stack = createNativeStackNavigator();
const TabBottom = createBottomTabNavigator();

export const MainApp = () => {
  return (
    <TabBottom.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomNav {...props} />}>
      <TabBottom.Screen name="Home" component={Home} />
      <TabBottom.Screen name="Order" component={Order} />
      <TabBottom.Screen name="Profile" component={Profile} />
    </TabBottom.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpAddress" component={SignUpAddress} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="DetailFoods" component={DetailFoods} />
        <Stack.Screen name="OrderBlank" component={OrderBlank} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
