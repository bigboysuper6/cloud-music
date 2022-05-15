import React from "react";
import requestService from "../services/requestService";
import MusicCard from "./common/musicCard";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Usr from "../services/usrService";
import DayRcmCard from "./common/dayRcmCard";

const RecommendPlaylist = (props) => {
  const [list, setList] = React.useState([]);
  const daySongsState = useSelector((state) => state.datasongs.value);
  const usrState = useSelector((state) => state.usr.value);
  React.useEffect(() => {
    getList();
  }, []);
  function getDayRcmCard() {
    if (usrState) {
      console.log("daySongsState1", daySongsState);
      return daySongsState && <DayRcmCard daySongsState={daySongsState} />;
    } else return null;
  }
  async function getList() {
    const cookie = Usr.getCookie();
    if (!usrState) {
      const { data } = await requestService.getrecommendplaylist(10);
      console.log("推荐的十个歌单", data);
      setList(data.result);
    } else {
      const { data: usrData } = await Usr.getUsrRecommendplaylist(cookie);
      console.log("每日推荐歌单:", usrData.recommend);
      const daysongs = usrData.recommend.slice(0, 8);
      console.log("裁剪为 8 首", daysongs);
      setList(daysongs);
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {getDayRcmCard()}
      {list.map((item, index) => (
        <MusicCard key={index} list={item} />
      ))}
    </Box>
  );
};

export default RecommendPlaylist;
