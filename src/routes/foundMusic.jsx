import React, { useState } from "react";
import SwipeableTextMobileStepper from "../components/common/swipeableTextMobileStepper";
import RecommendPlaylist from "../components/recommendPlaylist";
const FoundMusic = (props) => {
  return (
    <div style={{ backgroundColor: "rgb(37,37,37" }}>
      <SwipeableTextMobileStepper width="100%" />
      <RecommendPlaylist width="100%" />
    </div>
  );
};

export default FoundMusic;
