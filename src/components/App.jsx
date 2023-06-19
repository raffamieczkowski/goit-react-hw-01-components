import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friends from './Friends/Friends';
import userData from './Profile/user.json';
import friendsData from './Friends/friends.json';

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
      <Friends friends={friendsData} />
    </div>
  );
};