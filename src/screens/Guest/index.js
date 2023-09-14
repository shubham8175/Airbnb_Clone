import {Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

const GuestScreen = () => {
const [adults, setAdults]=useState(0);
const [childrens, setChildrens]=useState(0);
const [infants, setInfants]=useState(0);
  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text>Adults</Text>
          <Text style={styles.age}>Ages 13 or above</Text>
        </View>
        <View style={styles.buttonsWithValue}>
          <TouchableOpacity onPress={()=>setAdults(Math.max(0,adults - 1))} style={styles.plusMinus}>
            <Text style={styles.buttonColor}>-</Text>
          </TouchableOpacity>
          <Text style={styles.valueText}>{adults}</Text>
          <TouchableOpacity onPress={()=>setAdults(adults + 1)} style={styles.plusMinus}>
            <Text style={styles.buttonColor}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text>Childrens</Text>
          <Text style={styles.age}>Ages 2-12</Text>
        </View>
        <View style={styles.buttonsWithValue}>
          <TouchableOpacity onPress={()=>setChildrens(Math.max(0,childrens - 1))} style={styles.plusMinus}>
            <Text style={styles.buttonColor}>-</Text>
          </TouchableOpacity>
          <Text style={styles.valueText}>{childrens}</Text>
          <TouchableOpacity onPress={()=>setChildrens(childrens + 1)} style={styles.plusMinus}>
            <Text style={styles.buttonColor}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text>Infants</Text>
          <Text style={styles.age}>Ages 13 or above</Text>
        </View>
        <View style={styles.buttonsWithValue}>
          <TouchableOpacity onPress={()=>setInfants(Math.max(0,infants - 1))} style={styles.plusMinus}>
            <Text style={styles.buttonColor}>-</Text>
          </TouchableOpacity>
          <Text style={styles.valueText}>{infants}</Text>
          <TouchableOpacity onPress={()=>setInfants(infants + 1)} style={styles.plusMinus}>
            <Text style={styles.buttonColor}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GuestScreen;
