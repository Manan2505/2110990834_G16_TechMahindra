import React from 'react';
import UserManager from './components/UserManager';
import withFirebaseCrud from './hoc/withFirebaseCrud';

const UserManagerWithFirebase = withFirebaseCrud(UserManager, "users");

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Firebase User Manager</h1>
      <UserManagerWithFirebase />
    </div>
  );
}

export default App;