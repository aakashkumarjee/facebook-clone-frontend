import React from "react";
import Feed from "./../Feed/Feed";
import Navbar from "./../Navbar/Navbar";
import SidebarLeft from "./../SidebarLeft/SidebarLeft";
import SidebarRight from "./../SidebarRight/SidebarRight";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="appBody">
        <SidebarLeft />
        <Feed />
        <SidebarRight />
      </div>
    </div>
  );
}

export default Home;
