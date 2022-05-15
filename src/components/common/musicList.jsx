import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { Favorite, Layers } from "@mui/icons-material";
import { Link } from "@mui/material";
import requestService from "../../services/requestService";
import { useDispatch, useSelector } from "react-redux";
import {
  setMusicIndex,
  changeMusicData,
  setMusicStatusTrue,
} from "../../features/music/playMusicSlice";
import {
  setplayListMusic,
  incrementByAmount,
} from "../../features/music/playListSlice";
import store from "../../app/store";

const Container = styled.div`
  min-height: 80px;
  width: 976px;
  border-radius: 0.625rem;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: rgb(50, 50, 50);
  }
`;

const ContainerLeft = styled.div`
  width: 30%;
  display: flex;
  align-items: center;

  border-radius: 0.625rem;
`;

const ImageMusic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 0px 5% 0px 0.5rem;
`;

const MusicInformation = styled.div`
  margin: 0;
`;

const ContainerMid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
`;

const ContainerEnd = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const MusicList = (props) => {
  const songlist = useSelector((state) => state.songlistmusic.value);
  const dispatch = useDispatch();
  const timeChange = () => {
    let time = props.songslist.dt;
    let minutes = parseInt(time / (60 * 1000));
    let seconds = parseInt(time / 1000 - minutes * 60);
    if (minutes < 10) {
      minutes = "0" + minutes.toString();
    }
    if (seconds < 10) {
      seconds = "0" + seconds.toString();
    }
    let time_ms = minutes + ":" + seconds;
    return time_ms;
  };

  function playMusic() {
    const MusicData = {
      picUrl: props.songslist.al.picUrl,
      id: props.songslist.id,
      auth: props.songslist.ar,
      name: props.songslist.name,
    };
    dispatch(changeMusicData(MusicData));
    dispatch(setMusicStatusTrue());
    dispatch(setplayListMusic(songlist));
    // const state = store.getState();
    // console.log("store 最新状态", state);
    // const playList = state.playlistmusic.value.payload.payload;
    // console.log("最新播放列表", playList);
    console.log("当前歌曲", props.songslist);
    console.log("当前歌曲索引", props.index);
    dispatch(setMusicIndex(props.index));
  }

  return (
    <Container onDoubleClick={playMusic}>
      <ContainerLeft>
        <ImageMusic src={props.songslist.al.picUrl} />
        <MusicInformation>
          <Typography
            gutterBottom
            sx={{
              padding: 0,
              margin: 0,
              fontSize: "1rem",
              fontWeight: "bold",
              lineHeight: "1rem",
              color: "rgb(180,180,180)",
            }}
            component="div"
          >
            {props.songslist.name}
          </Typography>
          <Typography
            sx={{
              padding: 0,
              margin: "0.187rem 0 0 0 ",
              fontSize: "0.75rem",
              lineHeight: "1rem",
              color: "rgb(180,180,180)",
            }}
          >
            {props.songslist.ar.map((item, index) =>
              index === props.songslist.ar.length - 1 ? (
                <Link key={index}>{item.name}</Link>
              ) : (
                <span key={index}>
                  <Link>{item.name}</Link>
                  <span
                    style={{
                      color: "rgb(25,115,205)",
                      margin: "3px",
                      fontWeight: "bold",
                    }}
                  >
                    ,
                  </span>
                </span>
              )
            )}
          </Typography>
        </MusicInformation>
      </ContainerLeft>
      <ContainerMid>
        <Typography
          gutterBottom
          sx={{
            padding: 0,
            margin: 0,
            fontSize: "0.875rem",
            fontWeight: "bold",
            lineHeight: "1rem",
            color: "rgb(180,180,180)",
          }}
          component="div"
        >
          {props.songslist.al.name}
        </Typography>
      </ContainerMid>
      <ContainerEnd>
        <IconButton color="secondary" aria-label="add an alarm">
          <Favorite></Favorite>
        </IconButton>
        <Typography
          gutterBottom
          sx={{
            margin: 0,
            marginRight: "1rem",
            padding: 0,
            fontSize: "0.875rem",
            fontWeight: "bold",
            lineHeight: "1rem",
            color: "rgb(180,180,180)",
          }}
          component="div"
        >
          {timeChange()}
        </Typography>
      </ContainerEnd>
    </Container>
  );
};

export default MusicList;
