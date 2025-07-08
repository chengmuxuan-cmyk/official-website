import axios from 'axios';

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API, // 根据环境变量设置基础 URL
  timeout: 5000 // 超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在这里可以做些请求前的处理，例如添加 token
    return config;
  },
  error => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 可以在这里对响应数据做处理
    return response.data;
  },
  error => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default service;