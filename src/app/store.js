import { configureStore } from "@reduxjs/toolkit";
import usrReducer from "../features/usr/usrSlice";
import dataSongsSlice from "../features/usr/dataSongsSlice";
import playMusicSlice from "../features/music/playMusicSlice";
import playListMusic from "../features/music/playListSlice";
import songListMusic from "../features/music/songlistSlice";
export default configureStore({
  reducer: {
    usr: usrReducer,
    datasongs: dataSongsSlice,
    playmusic: playMusicSlice,
    playlistmusic: playListMusic,
    songlistmusic: songListMusic,
  },
});
