import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1640711804~hmac=67d627608a9a2533558677e0a0f17b4d"
          alt="Linkedin Logo"
          title="Linkedin Logo"
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" name="" id="" />
        </div>
      </div>
      <div className="header_right"></div>
    </div>
  );
}

export default Header;
