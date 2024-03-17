import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./components/Profile/Profile.jsx";
import userData from "./userData.json";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Profile
    name={userData.username}
    tag={userData.tag}
    location={userData.location}
    image={userData.avatar}
    stats={userData.stats}
  />
);
