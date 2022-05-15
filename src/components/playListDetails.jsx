import React from "react";
import MusicList from "./common/musicList";
import requestService from "../services/requestService";
import { Box } from "@mui/material";
import { matchPath, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSongListMusic } from "../features/music/songlistSlice";
const PlayListDetails = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [musiclist, setMusicList] = React.useState([]);
  const daySongsState = useSelector((state) => state.datasongs.value);
  React.useEffect(() => {
    getMusicList();
  }, []);

  React.useEffect(() => {
    if (location.pathname === "/daysongs" && daySongsState) {
      dispatch(setSongListMusic(daySongsState.payload.dailySongs));
      console.log("已执行设置当前歌单列表");
    }
  }, [daySongsState, dispatch, location.pathname]);

  async function getMusicList() {
    if (location.pathname !== "/daysongs") {
      const match = matchPath({ path: "/songlist/:id" }, location.pathname);
      let { id } = match.params;
      const { data } = await requestService.getmusiclist(id);
      console.log("歌单所有音乐信息", data);
      setMusicList(data.songs);
      dispatch(setSongListMusic(data.songs));
      console.log("已执行设置当前歌单列表");
    }
  }

  return (
    <Box>
      {location.pathname === "/daysongs" && daySongsState && (
        <Box>
          {daySongsState.payload.dailySongs.map((item, index) => (
            <MusicList key={index} songslist={item} index={index} />
          ))}
        </Box>
      )}
      {location.pathname !== "/daysongs" && (
        <Box>
          {musiclist.map((item, index) => (
            <MusicList key={index} songslist={item} index={index} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PlayListDetails;
