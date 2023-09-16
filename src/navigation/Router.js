import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Screens/Home/index';
import BottomTabNavigator from './BottomTabNavigator';
import DestinationSearchScreen from '../Screens/DestinationSearch';
import GuestScreen from '../Screens/Guest/index';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomTabNavigator' screenOptions={{headerShown:false}}>
        <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator}/>
        <Stack.Screen name='DestinationSearchScreen' component={DestinationSearchScreen}/>
        <Stack.Screen name='GuestScreen' component={GuestScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
