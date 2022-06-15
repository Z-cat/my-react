import axios from "axios";


const https = axios.create({
  baseURL: "http://localhost:3001/", // 所有请求的公共地址部分
  timeout: 3000, // 请求超时时间 这里的意思是当请求时间超过5秒还未取得结果时 提示用户请求超时
});

// // Add a request interceptor
// https.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// https.interceptors.response.use(
//   function (response) {
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );


export default https;