import React from 'react';
import {View, ListView} from 'react-native';

import styles from './styles';
import Post from './post';

const baseUrl = 'https://hacker-news.firebaseio.com/v0';
const topStories = `${baseUrl}/topstories.json`;

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      posts: this.ds.cloneWithRows([]),
    };

    this.loadArticles();
  }

  async loadArticles() {
    const topPosts = await fetch(topStories).then(r => r.json());
    const topPostsSlice = topPosts.slice(0, 20);
    const posts = await Promise.all(topPostsSlice.map(id => fetch(`${baseUrl}/item/${id}.json`).then(r => r.json())));
    this.setState({posts: this.ds.cloneWithRows(posts)});
  }

  navigateTo(post) {
    const {navigate} = this.props.navigation;
    navigate('Post', post);
  }

  render() {
    return (
      <View style={styles.main}>
        <ListView
          style={styles.posts}
          enableEmptySections
          dataSource={this.state.posts}
          renderRow={p => <Post navigate={post => this.navigateTo(post)} post={p} />}
        />
      </View>
    );
  }
}
