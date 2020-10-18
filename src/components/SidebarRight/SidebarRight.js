import React from "react";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./SidebarRight.css";
import Contact from "./Contact";
function SidebarRight() {
  return (
    <div className="sidebarRight">
      <div className="sidebarRightOptions">
        <h3>Sponsored</h3>
      </div>
      <hr/>
      <div className="sidebarRightOptions">
        <h3>Contacts</h3>
        <div className="contactOptions">
          <div className="contactOption">
            <VideoCallIcon />
          </div>
          <div className="contactOption">
            <SearchIcon />
          </div>
          <div className="contactOption">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <div className="sidebarRightBottom">
        <Contact
          profilePic="https://www.hindipro.com/wp-content/uploads/2019/12/always-be-happy.png"
          name="Shailesh Tiwari"
        />
        <Contact
          profilePic="data:image/jpeg;base64,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"
          name="Praveen Sharma"
        />
        <Contact
          profilePic="https://i.pinimg.com/originals/8d/e5/e4/8de5e43d6f36cd82201407ba00c7388d.jpg"
          name="Jai Prakash"
        />
        <Contact
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmP2xIg-K0skhpcmN-Sd8j9ucz9bOzxHoCpg&usqp=CAU"
          name="Rahul Paswan"
        />
      </div>
    </div>
  );
}

export default SidebarRight;