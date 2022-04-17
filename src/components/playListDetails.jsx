import React from "react";
import MusicList from "./common/musicListMain";
import requestService from "../services/requestService";
import { Box } from "@mui/material";
import { matchPath, useLocation } from "react-router-dom";
const PlayListDetails = (props) => {
  const location = useLocation();
  const match = matchPath({ path: "/songlist/:id" }, location.pathname);
  let { id: list_id } = match.params;
  const [id, setId] = React.useState(list_id);
  const [musiclist, setMusicList] = React.useState([]);
  React.useEffect(() => {
    getMusicList();
  }, []);
  async function getMusicList() {
    const { data } = await requestService.getmusiclist(id);
    console.log("歌单所有音乐信息", data);
    setMusicList(data.songs);
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
