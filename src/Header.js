import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        />
      </div>

      <div className="header_input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="headerinputbtn" />
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon"  />
        <NotificationsIcon className="header_icon"  />
        <Avatar src="https://avatars.githubusercontent.com/u/87361294?v=4" />
      </div>
    </div>
  );
};

export default Header;
