import PlayListDetails from "./../components/playListDetails";
import React from "react";
import PlayListHeader from "../components/playListHeader";
const SongList = (props) => {
  return (
    <React.Fragment>
      <PlayListHeader />
      <PlayListDetails />
    </React.Fragment>
  );
};

export default SongList;
