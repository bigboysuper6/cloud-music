import React from "react";
import MusicList from "./common/musicListMain";
import requestService from "../services/requestService";
import { Box } from "@mui/material";
const PlayListDetails = (props) => {
  const [musiclist, setMusicList] = React.useState([]);
  React.useEffect(() => {
    getMusicList();
  }, []);
  const [id, setId] = React.useState("6948234548");

  async function getMusicList() {
    const { data } = await requestService.getmusiclist(id);
    setMusicList(data.songs);
    console.log(data);
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
