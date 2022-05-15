import http from "./httpService";
const rootUrl = "http://localhost:3000";
const carouselUrl = rootUrl + "/banner";

function getcarousel() {
  return http.get(carouselUrl);
}

const recommendplaylistUrl = rootUrl + "/personalized";
function getrecommendplaylist(limit) {
  return http.get(recommendplaylistUrl + `?limit=${limit}`);
}

const musiclistUrl = rootUrl + "/playlist/track/all";
function getmusiclist(id) {
  return http.get(musiclistUrl + `?id=${id}`);
}

//获取歌单动态信息,如播放数等.
const playlistdetailUrl = rootUrl + "/playlist/detail";
function getplaylistdetail(id) {
  return http.get(playlistdetailUrl + `?id=${id}`);
}
//获取音乐 url
const musicUrl = rootUrl + "/song/url";
function getMusicUrl(id) {
  return http.get(musicUrl + `?id=${id}`);
}
export default {
  getcarousel,
  getrecommendplaylist,
  getmusiclist,
  getplaylistdetail,
  getMusicUrl,
};
