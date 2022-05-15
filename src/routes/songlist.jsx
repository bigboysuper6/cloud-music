import PlayListDetails from "./../components/playListDetails";
import React from "react";
import PlayListHeader from "../components/playListHeader";
const SongList = (props) => {
  return (
    <div style={{ margin: "90px 0", backgroundColor: "rgb(37,37,37)" }}>
      <PlayListHeader />
      <PlayListDetails />
    </div>
  );
};

export default SongList;
