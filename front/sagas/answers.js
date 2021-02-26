import axios from 'axios';
import { call, put, takeLatest, all, fork, throttle } from 'redux-saga/effects';
import {
  LOAD_ANSWERS_SUCCESS,
  LOAD_ANSWERS_FAILURE,
  LOAD_ANSWERS_REQUEST,
} from '../reducers/answers';

// 특정 유저의 answer 전부
function loadAnswersAPI(data) {
  return axios.get(`/answers/${data.userId}?lastId=${data.lastId || 0}`);
}

function* loadAnswers(action) {
  try {
    const result = yield call(loadAnswersAPI, action.data);
    yield put({
      type: LOAD_ANSWERS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ANSWERS_FAILURE,
      error: err.message,
    });
  }
}

// WATCHER

function* watchLoadAnswers() {
  yield throttle(2000, LOAD_ANSWERS_REQUEST, loadAnswers);
}

export default function* answerSaga() {
  yield all([fork(watchLoadAnswers)]);
}
