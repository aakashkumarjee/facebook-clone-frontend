import React from "react";
import "./SidebarLeft.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import SidebarRow from "./../SidebarRow/SidebarRow";
function SidebarLeft() {
  return (
    <div className="sidebarLeft">
      <SidebarRow
        src="https://img.icons8.com/material/4ac144/256/user-male.png"
        title="Akash Kumar"
      />

      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StoreFrontIcon} title="MarketPlace" />
    </div>
  );
}

export default SidebarLeft;
