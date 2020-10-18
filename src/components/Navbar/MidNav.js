import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import TheatersIcon from "@material-ui/icons/Theaters";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

function MidNav() {
  return (
    <div className="midNav">
      <div className="headerOption headerOptionActive">
        <HomeIcon fontSize="large" />
      </div>
      <div className="headerOption">
        <TheatersIcon fontSize="large" />
      </div>
      <div className="headerOption">
        <PeopleAltIcon fontSize="large" />
      </div>
    </div>
  );
}

export default MidNav;
