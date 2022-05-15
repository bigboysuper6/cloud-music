import http from "./httpService";
const rootUrl = "http://localhost:3000";

const qr_key = rootUrl + "/login/qr/key";
function getqrkey() {
  return http.get(qr_key + `?timerstamp=${Date.now()}`);
}

const qr_create = rootUrl + "/login/qr/create";
function getqrcreate(key) {
  return http.get(
    qr_create + `?key=${key}&qrimg=true&timerstamp=${Date.now()}`
  );
}

const qr_check = rootUrl + "/login/qr/check";
function getqrcheck(key) {
  return http.get(qr_check + `?key=${key}&timerstamp=${Date.now()}`);
}

const loginstatus = rootUrl + "/login/status";
function getloginstatus(cookie) {
  return http.post(loginstatus + `?timerstamp=${Date.now()}`, { cookie });
}

export default {
  getqrkey,
  getqrcheck,
  getqrcreate,
  getloginstatus,
};
