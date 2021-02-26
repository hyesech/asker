import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import askSaga from './ask';
import asksSaga from './asks';
import answerSaga from './answer';
import answersSaga from './answers';
import authSaga from './auth';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

export default function* rootSage() {
  yield all([
    fork(askSaga),
    fork(asksSaga),
    fork(answerSaga),
    fork(answersSaga),
    fork(authSaga),
  ]);
}
