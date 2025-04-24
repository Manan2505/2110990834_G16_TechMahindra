import React from 'react';

const UserList = ({ data, loading, error }) => {
  if (loading) return <p>Loading Users...</p>;
  if (error) return <p>Error fetching users</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
