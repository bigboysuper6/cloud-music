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

export default {
  getCarousel,
  getrecommendplaylist,
  getmusiclist,
};
