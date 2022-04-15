import React from "react";
import MusicList from "./common/musicListMain";
import requestService from "../services/requestService";
import { Box } from "@mui/material";
import { matchPath, useLocation } from "react-router-dom";
const PlayListDetails = (props) => {
  const location = useLocation();
  const [id, setId] = React.useState("3227063101");
  const [musiclist, setMusicList] = React.useState([]);
  React.useEffect(() => {
    getMusicList();
  }, []);
  async function getMusicList() {
    const { data } = await requestService.getmusiclist(id);
    setMusicList(data.songs);
    console.log(musiclist);
  }
  return (
    <Box>
      {musiclist.map((item, index) => (
        <MusicList key={index} songslist={item} />
      ))}
    </Box>
  );
};

export default PlayListDetails;
