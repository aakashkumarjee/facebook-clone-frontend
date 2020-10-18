import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        title="Story"
        image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />
      <Story
        title="Story"
        image="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
      />
      <Story
        title="Story"
        image="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
      />
      <Story
        title="Story"
        image="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Story
        title="Suns"
        image="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_views_of_the_sun5/22136942-2-eng-GB/Solar_Orbiter_s_first_views_of_the_Sun_pillars.gif"
      />
    </div>
  );
}

export default StoryReel;
