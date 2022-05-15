import login from "./loginService";
import http from "./httpService";
const rootUrl = "http://localhost:3000";

//用户是否登录
function getCurrentUser() {
  const cookie = localStorage.getItem("cookie");
  console.log(cookie);
  if (cookie === null) return false;
  return true;
}

function getCookie() {
  const cookie = localStorage.getItem("cookie");
  return cookie;
}

//通过 id 获取用户信息
const usrUrl = rootUrl + "/user/detail";
function getUsrDetail(id) {
  return http.get(usrUrl + `?uid=${id}`);
}

//获取 cookie 并 通过 cookie从服务器获取用户id 再获取详细信息
async function getUsrInformation() {
  const cookie = localStorage.getItem("cookie");
  const { data: usr_data } = await login.getloginstatus(cookie);
  console.log("账号信息", usr_data.data);
  const { data: usr_information } = await getUsrDetail(
    usr_data.data.account.id
  );
  console.log("用户详细信息", usr_information);
  return { usrData: usr_data.data, usrInformation: usr_information };
}

const usrDaySongsUrl = rootUrl + "/recommend/songs";
function getUsrDaySongs(cookie) {
  return http.post(usrDaySongsUrl, cookie);
}

const usrRecommendplaylistUrl = rootUrl + "/recommend/resource";
function getUsrRecommendplaylist(cookie) {
  return http.post(usrRecommendplaylistUrl, cookie);
}
function logout() {
  console.log("已退出");
  localStorage.removeItem("cookie");
}

export default {
  getUsrDetail,
  getUsrInformation,
  logout,
  getCurrentUser,
  getCookie,
  getUsrDaySongs,
  getUsrRecommendplaylist,
};
