import React, { useContext } from 'react';

import AuthContext from './AuthContext';
import UserCard from './UserCard';

const UserInfo = () => {
  const { 
    currentUser: {
      firstName = 'Unknown', 
      lastName = 'Unknown', 
      avatarUrl, 
      email,
    },
  } = useContext(AuthContext);

  const fullName = `${firstName} ${lastName}`;

  return (
    <UserCard 
      fullName={fullName} 
      email={email} 
      avatar={avatarUrl} 
    />
  );
};

export default UserInfo;
