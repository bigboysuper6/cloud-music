import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router-dom";
import requestService from "../services/requestService";
import Dialogs from "./common/dialog";
function PlayListHeader(props) {
  const location = useLocation();
  const match = matchPath({ path: "/songlist/:id" }, location.pathname);
  let { id } = match.params;
  const [playListDetail, setPlayListDetail] = useState({});
  const [authname, setAuthname] = useState("");
  useEffect(() => {
    getPlayListDetailData();
  }, []);
  async function getPlayListDetailData() {
    const { data } = await requestService.getplaylistdetail(id);
    const { playlist } = data;
    const { nickname } = playlist.creator;
    console.log("歌单详细信息", playlist);
    console.log("创建者名字", nickname);
    setPlayListDetail(data.playlist);
    setAuthname(nickname);
  }
  function getTime(createtime) {
    let time = new Date(createtime);
    return (
      time.getUTCFullYear() +
      "年" +
      time.getMonth() +
      "月" +
      time.getDate() +
      "日"
    );
  }
  function getCount(playCount) {
    if (playCount > 10000) return Math.round(playCount / 10000) + "万";
    else return playCount;
  }
  const HeaderFlex = styled.div`
    width: 61rem;
    margin: 3.75rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const ImagePlayList = styled.img`
    width: 290px;
    border-radius: 0.625rem;
    box-shadow: 0px 0px 0.625rem rgb(20, 20, 20);
  `;
  const ContentPlayList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 620px;
    height: 240px;
  `;
  return (
    <div>
      <HeaderFlex>
        <ImagePlayList src={playListDetail.coverImgUrl}></ImagePlayList>
        <ContentPlayList>
          <Typography
            sx={{
              padding: 0,
              margin: 0,
              fontSize: "35px",
              fontWeight: "bold",
              color: "rgb(0,0,0)",
            }}
            variant="h1"
            component="h1"
          >
            {playListDetail.name}
          </Typography>
          <div>
            <Typography
              gutterBottom
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "1rem",
                fontWeight: "bold",
                color: "rgb(180,180,180)",
              }}
            >
              {authname} {getTime(playListDetail.createTime)}创建
            </Typography>
            <Typography
              gutterBottom
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "13px",
                color: "rgb(180,180,180)",
              }}
            >
              播放量:{getCount(playListDetail.playCount)} 最近一次更新于
              {getTime(playListDetail.updateTime)}
            </Typography>
          </div>

          <Dialogs description={playListDetail.description} />
          <Button
            sx={{
              height: "40px",
              width: "100px",
              borderRadius: "0.625rem",
              boxShadow: "0px 0px 0.625rem rgb(20, 20, 20)",
            }}
            variant="contained"
            startIcon={<PlayArrowSharpIcon />}
          >
            播放
          </Button>
        </ContentPlayList>
      </HeaderFlex>
    </div>
  );
}

export default PlayListHeader;
