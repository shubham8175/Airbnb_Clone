import {Text, Image, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Post = (getData) => {
  const post=getData.post
  return (
    <View style={styles.container}>
      {/* for images */}

      <Image
        style={styles.image}
        source={{uri: post.image}}
      />

      {/* for bedrooms */}
      <Text style={styles.bedroom}> {post.bed} bed/ {post.bedroom} bedroom</Text>
      {/* for flats */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/* old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text>
        /night
      </Text>

      {/* total price */}
      <Text style={styles.totalPrice}>$ {post.totalPrice} total price</Text>
    </View>
  );
};

export default Post;
