import axios from 'axios';
const { BASE_URL: API_URL } = process.env;

const http = (token = null) => {
  const headers = token && {
    authorization: `Bearer ${token}`,
  };
  return axios.create({
    baseURL: API_URL,
    headers,
  });
};

export default http;
