import React from "react";
import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Avatar } from "@mui/material";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__right">
        <FacebookRoundedIcon />
        <form className="navbar__inputForm">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </form>
      </div>

      <div className="navbar__center">
        <HomeIcon className="home" />
        <PeopleAltOutlinedIcon />
        <OndemandVideoOutlinedIcon />
        <StorefrontOutlinedIcon />
      </div>

      <div className="navbar__left">
        <div className="navbar__profile">
          <Avatar
            src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/271279721_473075930825195_4672592152746442114_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pWaT2pIsyMQAX80Ucwk&_nc_ht=scontent-del1-1.xx&oh=00_AT89Wjx0HYXah-SlQxWRJHSzKAiA15G77bH5vOBKmzn50A&oe=62122FEA"
            sx={{ height: 24, width: 24 }}
          />
          <p>Md Anas </p>
        </div>

        <AppsOutlinedIcon className="app" />
        <MapsUgcOutlinedIcon className="message" />
        <NotificationsIcon className="notification" />
        <ArrowDropDownOutlinedIcon className="drop" />
      </div>
    </div>
  );
}

export default NavBar;
