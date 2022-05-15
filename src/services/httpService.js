import axios from "axios";

axios.defaults.withCredentials = true;

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedError) {
      console.log("一个预期之外的错误");
    }
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
