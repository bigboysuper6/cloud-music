import React from "react";
import requestService from "../services/requestService";
import MusicCard from "./common/musicCard";
import { Box } from "@mui/material";
const RecommendPlaylist = (props) => {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    getList();
  }, []);

  async function getList() {
    const { data } = await requestService.getrecommendplaylist();
    console.log("推荐的十个歌单", data);
    data.result.splice(1, 1);
    setList(data.result);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {list.map((item, index) => (
        <MusicCard key={index} list={item} />
      ))}
    </Box>
  );
};

export default RecommendPlaylist;
