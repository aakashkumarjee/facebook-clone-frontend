import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
function LeftNav() {
  return (
    <div className="leftNav">
      <Link to="/">
      <div>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt=""
        />
      </div>
      </Link>
      <div className="search">
        <SearchIcon />
        <input placeholder="Search Facebook" type="text" />
      </div>
    </div>
  );
}

export default LeftNav;
