import { Avatar } from "@mui/material";
import React from "react";
import "./Feed.css";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <form>
          <div className="header__input">
            <Avatar />
            <input type="text" placeholder="What's on your mind, Md Anas?" />
          </div>
        </form>
        <div className="break"></div>
        <div className="header__activities">
          <div className="activity">
            <VideoCameraFrontIcon />
            <p>Live Video</p>
          </div>
          <div className="activity">
            <VideoCameraFrontIcon />
            <p>Live Video</p>
          </div>
          <div className="activity">
            <VideoCameraFrontIcon />
            <p>Live Video</p>
          </div>
        </div>
      </div>
      <div className="feed__subheader"></div>

      {/* Post */}
    </div>
  );
}

export default Feed;
