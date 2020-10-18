import React from 'react'
import './ProfileIntro.css';
import HouseIcon from "@material-ui/icons/House";
import SchoolIcon from "@material-ui/icons/School";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LocationOnIcon from "@material-ui/icons/LocationOn";
function ProfileIntro() {
    return (
        <div className="profileIntro">
        <h3>Intro</h3>
        <div className="profileIntroElements">
          <div className="profileIntroElement">
            <SchoolIcon />
            <div>
              <span>Studies Computer Science and Engineering at </span>
              <span>Delhi Technological Univeristy (Formerly DCE)</span>
            </div>
          </div>
          <div className="profileIntroElement">
            <SchoolIcon />
            <div>
              <span>Studied at </span>
              <span>Indian Institute of Information Technology, Pune</span>
            </div>
          </div>
          <div className="profileIntroElement">
            <HouseIcon />
            <div>
              <span>Lives in</span>
              <span>New Delhi, India</span>
            </div>
          </div>
          <div className="profileIntroElement">
            <LocationOnIcon />
            <div>
              <span>From </span>
              <span>Pratapgarh, Uttar Pradesh</span>
            </div>
          </div>
          <div className="profileIntroElement">
            <WatchLaterIcon />
            <div>
              <span>Joined on</span>
              <span>February 2013</span>
            </div>
          </div>

          <div className="profileIntroButton">
            <div>
              <span >Edit Details</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProfileIntro
