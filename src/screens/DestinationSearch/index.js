import {View, TextInput,Button, TouchableOpacity, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import search from '../../asset/data/search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  const goToGuest = () => {
    navigation.navigate('GuestScreen');
  };

  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      {/* input component */}


      <TextInput
        style={styles.textInput}
        placeholder="Where you want to go"
        value={inputText}
        onChangeText={setInputText}
      />
      {/* Lists of Destinations */}

      <FlatList
        data={search}
        renderItem={({item}) => (
          <TouchableOpacity onPress={goToGuest}>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Ionicons name="location-sharp" size={30} />
              </View>
              <Text>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
