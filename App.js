import {FlatList, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './src/asset/data/feed';
import SearchResultScreen from './src/screens/SearchResultScreen';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestScreen from './src/screens/Guest';


const App = () => {
  return (
    <View>
      {/* <HomeScreen/> */}
      {/* <Post post={post1} /> */}
      {/* <SearchResultScreen/> */}
     {/* <DestinationSearchScreen/> */}
     <GuestScreen/>
    </View>
  );
};

export default App;

