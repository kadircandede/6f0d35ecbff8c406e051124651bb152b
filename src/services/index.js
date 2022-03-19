import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use((config) => {
  config.baseURL = 'https://teknasyon.netlify.app/.netlify/functions/';
  // config.baseURL = 'https://www.ueslms.com/api/v1';
  config.headers = {
    "X-Access-Token": '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',
    "content-type": "application/json"
  }
  return config;
});

instance.interceptors.response.use(res => res, err => err);
export default () => instance;
