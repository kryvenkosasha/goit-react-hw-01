import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <ul className="friends-list-container">
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
