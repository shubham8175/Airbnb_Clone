import {Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './src/asset/data/feed';
import SearchResultScreen from './src/screens/SearchResultScreen';
import DestinationSearchScreen from './src/screens/DestinationSearch';

const post1 = feed[0];

const App = () => {
  return (
    <View>
      {/* <HomeScreen/> */}
      {/* <Post post={post1} /> */}
      {/* <SearchResultScreen/> */}
      <DestinationSearchScreen />
    </View>
  );
};

export default App;

