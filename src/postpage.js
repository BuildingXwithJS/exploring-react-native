import React from 'react';
import {View, ListView, WebView, Text} from 'react-native';

import styles from './styles';
import Comment from './comment';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';

export default class PostPage extends React.Component {
  constructor(props) {
    super(props);

    const {state} = props.navigation;

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      post: state.params,
      comments: this.ds.cloneWithRows([]),
    };

    this.loadComments();
  }

  async loadComments() {
    const comments = await Promise.all(
      (this.state.post.kids || []).map(id => fetch(`${baseUrl}/item/${id}.json`).then(r => r.json()))
    );
    this.setState({comments: this.ds.cloneWithRows(comments)});
  }

  render() {
    const {post} = this.state;
    return (
      <View style={styles.main}>
        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>{post.title}</Text>
        <WebView source={{uri: post.url}} style={{marginTop: 20, flex: 1}} />
        <ListView
          enableEmptySections
          style={{flex: 1}}
          dataSource={this.state.comments}
          renderRow={c => <Comment comment={c} />}
        />
      </View>
    );
  }
}
