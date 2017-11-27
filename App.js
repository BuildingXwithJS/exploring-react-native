import {StackNavigator} from 'react-navigation';

import HomePage from './src/home';
import PostPage from './src/postpage';

const App = StackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Post: {
    screen: PostPage,
    navigationOptions: {
      headerTitle: 'Post',
    },
  },
});

export default App;
