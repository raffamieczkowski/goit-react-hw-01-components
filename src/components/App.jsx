import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import userData from './Profile/user.json';
import FriendList from './Friends/FriendsList';
import friends from './Friends/friends.json';

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
      <FriendList friends={friends} />
    </div>
  );
};
