import React from 'react';
import './FriendsList.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li className="friend-item" key={friend.id}>
          <span className={`status ${friend.isOnline ? 'online' : 'offline'}`}></span>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="friend-name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;