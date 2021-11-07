import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";
import {setAuthToken, setAuthTokenExternalLogin} from "../Helpers/setAuthToken";

import { fetchWrapper } from "../Helpers/fetchWrapper";

const { publicRuntimeConfig } = getConfig();

const baseUrl = `${publicRuntimeConfig.apiUrl}`;

const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("user"))
);

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  register,
  getUser,
  getById,
  forgotPassword,
  resetPassword,
  update,
  ExternalLogin,
  updateUser,
  uploadPicture,
  delete: _delete,
};

function login(email: string, password: any) {
  return fetchWrapper
    .post(`${baseUrl}/Auth/login`, { email, password })
    .then((user) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user);
      localStorage.setItem("user", JSON.stringify(user));
      setAuthToken(user);
      return user;
    });
}

function ExternalLogin(googleData: string) {
  return fetchWrapper
    .externalLoginPost(`${baseUrl}/Auth/google`, googleData)
    .then((user) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      console.log("######################", user);
      
      userSubject.next(user);
      localStorage.setItem("user", JSON.stringify(user));
      setAuthTokenExternalLogin(user);
      return user;
    });
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/login");
}

function register(user: any) {
  return fetchWrapper.post(`${baseUrl}/Auth/signUp`, user)
  
}
function forgotPassword(data: any) {
  return fetchWrapper.post(`${baseUrl}/Auth/ForgotPassword`, data);
}
function resetPassword(data: any) {
  return fetchWrapper.post(`${baseUrl}/Auth/ResetPassword`, data);
}

function updateUser(user: any) {
  return fetchWrapper.patch(`${baseUrl}/User/update-profile`, user);
}
function uploadPicture(image: any) {
  return fetchWrapper.patchForPicture(`${baseUrl}/User/change-picture`,image);
}


function getUser() {
 return fetchWrapper.get(`${baseUrl}/Auth/getMyDetails`).then((data) => {
   return data;
 });
}

function getById(id: string) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update(id: string, params: any) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params).then((x) => {
    // update stored user if the logged in user updated their own record
    if (id === userSubject.value.id) {
      // update local storage
      const user = { ...userSubject.value, ...params };
      localStorage.setItem("user", JSON.stringify(user));

      // publish updated user to subscribers
      userSubject.next(user);
    }
    return x;
  });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id: any) {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
}
