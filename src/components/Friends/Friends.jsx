import React from 'react';
const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? 'online' : 'offline';

  return (
    <li className="item">
      <span className={`status ${statusClass}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
