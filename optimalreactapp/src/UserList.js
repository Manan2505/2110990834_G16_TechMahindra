// UserList.js
import React from 'react';

const UserList = React.memo(({ users }) => {
  console.log('Rendering UserList');

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
});

export default UserList;
