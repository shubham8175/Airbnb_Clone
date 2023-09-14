import {View, TextInput, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import search from '../../asset/data/search';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DestinationSearchScreen = () => {
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
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Ionicons name="location-sharp" size={30} />
            </View>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
