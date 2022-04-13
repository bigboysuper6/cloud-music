import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { Favorite, Layers } from "@mui/icons-material";
import { Link } from "@mui/material";
import "../../css/musiclist.css";

const ContainerLeft = styled.div`
  margin: 0.31rem 0;
  width: 33%;
  display: flex;
  align-items: center;
  border-radius: 0.625rem;
`;

const ImageMusic = styled.img`
  width: 20%;
  border-radius: 0.625rem;
  margin: 0px 5% 0px 0.5rem;
`;
const MusicInformation = styled.div`
  margin: 0;
`;

const ContainerMid = styled.div`
  margin: 0.31rem 0;
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
`;

const ContainerEnd = styled.div`
  margin: 0.31rem 0;
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const MusicList = (props) => {
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

  return (
    <div class="Container">
      <ContainerLeft onMouseEnter={{ backgroud: "rgb(50,50,50)" }}>
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
                <Link>{item.name}</Link>
              ) : (
                <span>
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
    </div>
  );
};

export default MusicList;
