import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar
          src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/271279721_473075930825195_4672592152746442114_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pWaT2pIsyMQAX80Ucwk&_nc_ht=scontent-del1-1.xx&oh=00_AT89Wjx0HYXah-SlQxWRJHSzKAiA15G77bH5vOBKmzn50A&oe=62122FEA"
          sx={{ height: 30, width: 30 }}
        />
        <p>Md Anas Sabah</p>
      </div>

      <div className="sidebar__option">
        <PeopleIcon className="people" />
        <h3>Find Friends</h3>
      </div>

      <div className="sidebar__option">
        <GroupsRoundedIcon className="group" />
        <h3>Groups</h3>
      </div>

      <div className="sidebar__option">
        <StorefrontIcon className="market" />
        <h3>Marketplace</h3>
      </div>

      <div className="sidebar__option">
        <OndemandVideoIcon className="watch" />
        <h3>Watch</h3>
      </div>
      <div className="sidebar__option">
        <WatchLaterIcon className="memory" />
        <h3>Memories</h3>
      </div>
    </div>
  );
}

export default Sidebar;
