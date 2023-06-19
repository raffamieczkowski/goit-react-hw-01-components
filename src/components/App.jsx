import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import userData from './user.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Statistics" />
    </div>
  );
};
