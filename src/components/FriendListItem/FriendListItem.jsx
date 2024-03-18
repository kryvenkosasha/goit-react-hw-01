import React from "react";
import "./FriendListItem.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend-container">
      <img src={avatar} alt="Avatar" width="48" />
      <p className="friend-name">{name}</p>
      <p className={isOnline ? "online" : "offline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
