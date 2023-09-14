import {ImageBackground, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import styles from '../Home/styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../asset/images/wallpaper.jpg')}
        style={styles.image}>
        <TouchableOpacity style={styles.searchButton}>
          <Fontisto name="search" size={18} color='#D85C77' />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Go Near</Text>
        <TouchableOpacity
          onPress={() => console.warn('Explore Button Clicked')}
          style={styles.button}>
          <Text style={styles.buttonText}>Explore Nearby Stays</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
