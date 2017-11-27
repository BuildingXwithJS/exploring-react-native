import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Post = ({navigate, post}) => (
  <TouchableOpacity onPress={() => navigate(post)}>
    <View
      style={{
        minHeight: 100,
        padding: 20,
        borderBottomWidth: 0.2,
        borderBottomColor: 'black',
      }}>
      <Text style={{fontSize: 20}}>{post.title}</Text>
      <View style={{paddingTop: 10, flexDirection: 'row'}}>
        <Text style={{flex: 1, fontSize: 14, fontWeight: 'bold'}}>{post.by}</Text>
        <Text style={{fontSize: 14}}>{post.score}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Post;
