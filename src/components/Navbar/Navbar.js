import React from "react";
import "./Navbar.css";
import LeftNav from './LeftNav';
import MidNav from './MidNav';
import RightNav from './RightNav';
function Navbar() {
  return (
    <div className="navbar">
      <LeftNav/>
      <MidNav/>
      <RightNav/>
      
      
      
    </div>
  );
}

export default Navbar;
