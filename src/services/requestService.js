import http from "./httpService";
const rootUrl = "http://localhost:3000";
const carouselUrl = rootUrl + "/banner";
function getCarousel() {
  return http.get(carouselUrl);
}

const recommendplaylistUrl = rootUrl + "/personalized?limit=11";
function getrecommendplaylist() {
  return http.get(recommendplaylistUrl);
}

const musiclistUrl = rootUrl + "/playlist/track/all";
function getmusiclist(id) {
  return http.get(musiclistUrl + `?id=${id}`);
}

//获取歌单动态信息,如播放数等.
const playlistdetailurl = rootUrl + "/playlist/detail";
function getplaylistdetail(id) {
  return http.get(playlistdetailurl + `?id=${id}`);
}

export default {
  getCarousel,
  getrecommendplaylist,
  getmusiclist,
  getplaylistdetail,
};
