import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import React, { useState } from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./QuickUpdate.css";

function QuickUpdate() {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <div className="quickUpdate">
      <div className="updateTop">
        <Avatar />
        <form>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            className="updateTopInput"
            placeholder={"What's in your Mind?"}
          />
          {/* <input placeholder="Image URL" /> */}
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="updateBottom">
        <div className="updateOptions">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="updateOptions">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="updateOptions">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default QuickUpdate;
