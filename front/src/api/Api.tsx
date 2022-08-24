import axios from "axios";

const token = `Bearer ${localStorage.getItem("token")}`;

const serverUrl = `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/`;
const get = (endpoint: string) => {
  return axios.get(serverUrl + endpoint, {
    headers: {
      Authorization: token,
    },
  });
};

const post = (endpoint: string, data: any) => {
  const bodyData = JSON.stringify(data);
  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

const put = (endpoint: string, data: any) => {
  const bodyData = JSON.stringify(data);
  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

const del = (endpoint: string) => {
  return axios.delete(serverUrl + endpoint, {
    headers: {
      Authorization: token,
    },
  });
};

export { get, post, put, del as delete };
