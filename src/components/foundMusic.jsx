import React, { useState } from "react";
import SwipeableTextMobileStepper from "./common/swipeableTextMobileStepper";
import RecommendPlaylist from "./recommendPlaylist";
import PlayListDetails from "./playListDetails";
const FoundMusic = (props) => {
  return (
    <div style={{ backgroundColor: "rgb(37,37,37" }}>
      <SwipeableTextMobileStepper />
      <RecommendPlaylist width="100%" />
      <PlayListDetails />
    </div>
  );
};

export default FoundMusic;
