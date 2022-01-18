import HeaderOption from "./HeaderOption";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import linkedin from "./images/linkedin.svg";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={linkedin} alt="Linkedin Logo" title="Linkedin Logo" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" name="" id="" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={GroupIcon} title="Network" />
        <HeaderOption Icon={WorkRoundedIcon} title="Jobs" />
        <HeaderOption Icon={MessageRoundedIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsRoundedIcon} title="Notifications" />
        <HeaderOption avatar={linkedin} title="Samuel" />
      </div>
    </div>
  );
}

export default Header;
