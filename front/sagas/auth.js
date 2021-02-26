import axios from 'axios';
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import {
  LOAD_AUTH_REQUEST,
  LOAD_AUTH_SUCCESS,
  LOAD_AUTH_FAILURE,
  GOOGLE_LOGIN_FAILURE,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  TWITTER_LOGIN_FAILURE,
  TWITTER_LOGIN_REQUEST,
  TWITTER_LOGIN_SUCCESS,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
} from '../reducers/auth';

// Load Auth
function loadAuthAPI() {
  return axios.get('/auth');
}

function* loadAuth() {
  try {
    const result = yield call(loadAuthAPI);

    yield put({
      type: LOAD_AUTH_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_AUTH_FAILURE,
      error: err.message,
    });
  }
}

// Load User
function loadUserAPI(data) {
  return axios.get(`/auth/users/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);

    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_USER_FAILURE,
      error: err.message,
    });
  }
}

// LOGIN
function loginAPI(data) {
  return axios.post('/auth/login', data);
}

// 프론트 요청 axios에서 옵션으로 withCredentials: true를 해주어야 합니

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.name,
    });
  }
}

// LOGOUT
function logoutAPI() {
  return axios.post('/auth/logout');
}

function* logout() {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.message,
    });
  }
}

// Sign Up
function signupAPI(data) {
  return axios.post('/auth/signup', data);
}

function* signup(action) {
  try {
    const result = yield call(signupAPI, action.data);

    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

// Twitter Login
function twitterLoginAPI() {
  return axios.get('/auth/twitter');
}

function* twitterLogin() {
  try {
    const result = yield call(twitterLoginAPI);
    yield put({
      type: TWITTER_LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: TWITTER_LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

// Google Login
function googleLoginAPI() {
  return axios.get('/auth/google');
}

function* googleLogin() {
  try {
    const result = yield call(googleLoginAPI);
    yield put({
      type: GOOGLE_LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: GOOGLE_LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadAuth() {
  yield takeLatest(LOAD_AUTH_REQUEST, loadAuth);
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signup);
}

function* watchTwitterLogin() {
  yield takeLatest(TWITTER_LOGIN_REQUEST, twitterLogin);
}

function* watchGoogleLogin() {
  yield takeLatest(GOOGLE_LOGIN_REQUEST, googleLogin);
}

export default function* authSaga() {
  yield all([
    fork(watchLoadAuth),
    fork(watchLoadUser),
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignup),
    fork(watchTwitterLogin),
    fork(watchGoogleLogin),
  ]);
}
