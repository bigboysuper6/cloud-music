import React, { useState } from "react";
import SwipeableTextMobileStepper from "../components/common/swipeableTextMobileStepper";
import RecommendPlaylist from "../components/recommendPlaylist";
const FoundMusic = (props) => {
  return (
    <div
      style={{
        width: "976px",
        backgroundColor: "rgb(37,37,37)",
        margin: "100px 0",
      }}
    >
      <SwipeableTextMobileStepper width="100%" />
      <RecommendPlaylist width="100%" />
    </div>
  );
};

export default FoundMusic;
