import store from "../store";

const baseURL = process.env.API_BASE_URL || "http://localhost:5000/api/v1";

const makeRequest = async (url, method, data, isMultipart) => {
  const requestOptions = {
    method,
  };
  if (!isMultipart) {
    requestOptions.headers = {
      "Content-Type": "application/json",
    };
  }
  if (isMultipart) {
    requestOptions.body = data;
  } else {
    requestOptions.body = JSON.stringify(data);
  }
  let token;
  if (store.state.users.currentUser) {
    token = store.state.users.currentUser.token;
  }
  if (token) {
    requestOptions.headers = {
      ...(requestOptions.headers || {}),
      Authorization: token,
    };
  }
  const result = await fetch(`${baseURL}/${url}`, requestOptions);
  if (result.ok) {
    return await result.json();
  }
  return Promise.reject(result);
};

export const Base = {
  async get(url) {
    return makeRequest(url, "get");
  },
  async post(url, data) {
    return makeRequest(url, "post", data);
  },
  async postMultipart(url, data) {
    return makeRequest(url, "post", data, true);
  },
  async put(url, data) {
    return makeRequest(url, "put", data);
  },
};
