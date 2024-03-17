import React from "react";
import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile-container">
      <div>
        <img src={image} alt="User avatar" className="profile-avatar-image" />
        <p className="profile-name">{name}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>

      <ul className="profile-stats-list">
        <li className="profile-stats-item">
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className="profile-stats-item">
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className="profile-stats-item">
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
