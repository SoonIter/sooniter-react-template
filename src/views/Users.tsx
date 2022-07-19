import React from 'react';
import { useUsersModel, userModel } from '../store/useUsers';

export const Users = () => {
  const users = useUsersModel();
  return (
    <ul>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </ul>
  );
};