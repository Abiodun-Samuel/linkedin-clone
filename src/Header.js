import HeaderOption from "./HeaderOption";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import linkedin from "./images/linkedin.svg";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={linkedin} alt="Linkedin Logo" title="Linkedin Logo" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" name="" id="" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={GroupIcon} title="Network" />
        <HeaderOption avatar={linkedin} title="Samuel" />
      </div>
    </div>
  );
}

export default Header;
