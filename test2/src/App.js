import React from 'react';
import PostList from './components/PostList';
import UserList from './components/UserList';
import withDataFetching from './hoc/withDataFetching';

const postsURL = 'https://jsonplaceholder.typicode.com/posts';
const usersURL = 'https://jsonplaceholder.typicode.com/users';

const PostListWithData = withDataFetching(PostList, postsURL);
const UserListWithData = withDataFetching(UserList, usersURL);

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Posts</h1>
      <PostListWithData />
      <h1>Users</h1>
      <UserListWithData />
    </div>
  );
}

export default App;
