import { USER_LOCAL_STORE } from "constant";
import { BehaviorSubject } from "rxjs";
import { apiBase } from "./instance";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem(USER_LOCAL_STORE))
);

const login = (user) => {
  return apiBase({
    url: "/user/login",
    method: "POST",
    data: user,
  });
};

const updateUser = (user) => {
  localStorage.setItem(USER_LOCAL_STORE, JSON.stringify(user));
  currentUserSubject.next(user);
};

const logout = () => {
  localStorage.removeItem(USER_LOCAL_STORE);
  currentUserSubject.next(null);
};

const register = (user) => {
  return apiBase({
    url: "/user/register",
    method: "POST",
    data: user,
  });
};

const forgotPassword = (email) => {
  return apiBase({
    url: "/api/auth/forgot-password",
    method: "POST",
    data: {
      email,
    },
  });
};

const verifyCode = (code) => {
  return apiBase({
    url: `/user/verify/${code}`,
    method: "POST",
  });
};

const changePassword = (data) => {
  return apiBase({
    url: "/api/auth/change-password",
    method: "POST",
    data,
  });
};

const authenticationService = {
  login,
  updateUser,
  logout,
  currentUser: currentUserSubject.asObservable,
  get currentUserValue() {
    return currentUserSubject.value;
  },
  register,
  forgotPassword,
  verifyCode,
  changePassword,
};

export default authenticationService;