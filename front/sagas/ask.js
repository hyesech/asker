import axios from 'axios';
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import {
  ADD_ASK_REQUEST,
  ADD_ASK_SUCCESS,
  ADD_ASK_FAILURE,
  LOAD_ASK_REQUEST,
  LOAD_ASK_SUCCESS,
  LOAD_ASK_FAILURE,
  DELETE_ASK_REQUEST,
  DELETE_ASK_FAILURE,
  DELETE_ASK_SUCCESS,
  PATCH_ASK_REQUEST_F,
  PATCH_ASK_REQUEST_T,
  PATCH_ASK_SUCCESS_F,
  PATCH_ASK_FAILURE_F,
  PATCH_ASK_SUCCESS_T,
  PATCH_ASK_FAILURE_T,
} from '../reducers/ask';

// POST ASKS/ID
// 특졍유저에게 질문하기
function addAskAPI(data) {
  return axios.post(`/asks/${data.userId}`, data);
}

function* addAsk(action) {
  try {
    const result = yield call(addAskAPI, action.data);
    yield put({
      type: ADD_ASK_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_ASK_FAILURE,
      error: err.message,
    });
  }
}

// LOAD ASK, GET ASKS
function loadAskAPI() {
  return axios.get('/asks');
}

function* loadAsk() {
  try {
    const result = yield call(loadAskAPI);
    yield put({
      type: LOAD_ASK_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ASK_FAILURE,
      error: err.message,
    });
  }
}

// DELETE ASK
function deleteAskAPI(data) {
  return axios.delete(`/asks/${data}`);
}
function* deleteAsk(action) {
  try {
    const result = yield call(deleteAskAPI, action.data);
    yield put({
      type: DELETE_ASK_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_ASK_FAILURE,
      error: err.message,
    });
  }
}

// Patch Ask False
function patchAskFAPI(data) {
  return axios.patch(`/asks/${data}/f`);
}
function* patchAskF(action) {
  try {
    const result = yield call(patchAskFAPI, action.data);
    yield put({
      type: PATCH_ASK_SUCCESS_F,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: PATCH_ASK_FAILURE_F,
      error: err.message,
    });
  }
}

// Patch Ask True
function patchAskTAPI(data) {
  return axios.patch(`/asks/${data}/t`);
}
function* patchAskT(action) {
  try {
    const result = yield call(patchAskTAPI, action.data);
    yield put({
      type: PATCH_ASK_SUCCESS_T,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: PATCH_ASK_FAILURE_T,
      error: err.message,
    });
  }
}

// WATCHER
function* watchAddAsk() {
  yield takeLatest(ADD_ASK_REQUEST, addAsk);
}

function* watchDeleteAsk() {
  yield takeLatest(DELETE_ASK_REQUEST, deleteAsk);
}

function* watchLoadAsks() {
  yield takeLatest(LOAD_ASK_REQUEST, loadAsk);
}

function* watchAskPatchFalse() {
  yield takeLatest(PATCH_ASK_REQUEST_F, patchAskF);
}

function* watchAskPatchTrue() {
  yield takeLatest(PATCH_ASK_REQUEST_T, patchAskT);
}

export default function* askSaga() {
  yield all([
    fork(watchAddAsk),
    fork(watchDeleteAsk),
    fork(watchLoadAsks),
    fork(watchAskPatchTrue),
    fork(watchAskPatchFalse),
  ]);
}
