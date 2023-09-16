import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome6Pro';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DestinationSearchScreen from '../Screens/DestinationSearch';
import HomeScreen from '../Screens/Home';


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: 'white', height: 55},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="search-outline"
              size={25}
              color={focused ? '#D34D4D' : '#C7C3C2'}
            />
          ),
        }}
        name="Explore"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="hearto"
              size={25}
              color={focused ? '#D34D4D' : '#C7C3C2'}
            />
          ),
        }}
        name="Saved"
        component={DestinationSearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="chatbox-outline"
              size={25}
              color={focused ? '#D34D4D' : '#C7C3C2'}
            />
          ),
        }}
        name="Inbox"
        component={DestinationSearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome6Brands
              name="airbnb"
              size={25}
              color={focused ? '#D34D4D' : '#C7C3C2'}
            />
          ),
        }}
        name="Airbnb"
        component={DestinationSearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <EvilIcons
              name="user"
              size={25}
              color={focused ? '#D34D4D' : '#C7C3C2'}
            />
          ),
        }}
        name="Profile"
        component={DestinationSearchScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
