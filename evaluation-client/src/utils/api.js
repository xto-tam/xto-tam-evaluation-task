import axios from 'axios';
import cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

import Config from '../config';

const USER_REQ_ID = 'user-request-id';

function checkReqId() {
  const requestId = cookies.get(USER_REQ_ID);
  if (!requestId) {
    cookies.set(USER_REQ_ID, uuidv4());
  }
}

const instance = axios.create({
  baseURL: Config.baseUrl,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(async (config) => {
  checkReqId();
  return config;
});


export const sendUserActivity = ({ url }) => {
  instance.post('/users/activity', { url });
}
