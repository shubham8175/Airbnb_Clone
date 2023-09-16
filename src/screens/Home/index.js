import {ImageBackground, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';

import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import BottomTabNavigator from '../../navigation/BottomTabNavigator';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleExplore = () => {
    navigation.navigate('DestinationSearchScreen');
  };
  return (
    <View>
      <ImageBackground
        source={require('../../asset/images/wallpaper.jpg')}
        style={styles.image}>
        <TouchableOpacity onPress={handleExplore} style={styles.searchButton}>
          <Fontisto name="search" size={18} color="#D85C77" />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Go Near</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore Nearby Stays</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
