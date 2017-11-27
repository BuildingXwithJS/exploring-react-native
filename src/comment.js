import React from 'react';
import {Text, View} from 'react-native';
import HTMLView from 'react-native-htmlview';

const Comment = ({comment}) => (
  <View
    style={{
      minHeight: 100,
      padding: 20,
      borderBottomWidth: 0.2,
      borderBottomColor: 'black',
    }}>
    <HTMLView value={comment.text} />
    <View style={{paddingTop: 10, flexDirection: 'row'}}>
      <Text style={{flex: 1, fontSize: 14, fontWeight: 'bold'}}>{comment.by}</Text>
    </View>
  </View>
);

export default Comment;
