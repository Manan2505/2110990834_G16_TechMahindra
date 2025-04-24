import React from 'react';
import PostList from './components/PostList';
import withDataFetching from './hoc/withDataFetching';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const PostListWithData = withDataFetching(PostList, URL);

function App() {
  return (
    <div>
      <h1>HOC Data Fetching Example</h1>
      <PostListWithData />
    </div>
  );
}

export default App;
