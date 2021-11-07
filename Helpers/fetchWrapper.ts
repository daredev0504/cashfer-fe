import getConfig from "next/config";
import axios from "axios";
import { userService } from "../Services/userService";

const { publicRuntimeConfig } = getConfig();
//axios.defaults.headers.common = { Authorization: `Bearer ${userService.userValue.data.accessToken}` };
export const fetchWrapper = {
  get,
  getWithParam,
  getForCurrency,
  post,
  externalLoginPost,
  patch,
  patchForPicture,
  delete: _delete,
};

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

async function get(url: string) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(url),
    cancelToken: source.token,
  };
  let res = await axios.get(url, requestOptions);

  return res.data;
}

async function getWithParam(url: string, body: any) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cancelToken: source.token,
    body: JSON.stringify(body),
  };
  let res = await axios.get(url, body, requestOptions);

  return res.data;
}

async function getForCurrency(url: string) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await axios.get(url, config);
  console.log(res);
  return res.data;
}

async function post(url: string, body: any) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "omit",
    cancelToken: source.token,
    body: JSON.stringify(body),
  };
  let res = await axios.post(url, body, requestOptions);
  console.log(res);

  return res;
}
async function externalLoginPost(url: string, googleData: any) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "omit",
    cancelToken: source.token,
    body: JSON.stringify({
      idToken: googleData.tokenId,
      provider: "Google",
    }),
  };
  let res = await axios.post(url, requestOptions.body, requestOptions);
  console.log(res);

  return res;
}

async function patch(url: string, body: any) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    body: JSON.stringify(body),
    cancelToken: source.token,
  };
  let res = await axios.patch(url, body, requestOptions);
  console.log(res);

  return res;
}
async function patchForPicture(url: string, body: any) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "multipart/form-data" },
    body: body,
    cancelToken: source.token,
  };
  let res = await axios.patch(url, body, requestOptions);
  console.log(res);

  return res;
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url: string) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function authHeader(url: string) {
  // return auth header with jwt if user is logged in and request is to the api url
  const user = userService.userValue;
  const isLoggedIn = user && user.token;
  const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.data.accessToken}` };
  } else {
    return {};
  }
}

function handleResponse(response: any) {
  return response.text().then((text: any) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].includes(response.status) && userService.userValue) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        userService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
