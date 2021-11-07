import axios from "axios";

export const setAuthToken = (token: any) => {
  if (token) {
    //axios.defaults.headers.common["Bearer"] = token.data.accessToken;
    axios.defaults.headers.common = {
      Authorization: `Bearer ${token.data.accessToken}`,
    };
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};


export const setAuthTokenExternalLogin = (token: any) => {
  if (token) {
    //axios.defaults.headers.common["Bearer"] = token.data.accessToken;
    axios.defaults.headers.common = {
      Authorization: `Bearer ${token.data.token}`,
    };
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};
