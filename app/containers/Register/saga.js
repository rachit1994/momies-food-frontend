/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SEND_API } from './constants';

import request from 'utils/request';
import { getState } from './selectors';
import { success, error } from './actions';
/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const values = yield select(getState());
  const requestURL = `http://localhost:4200/v1/auth/register`;
  const options = {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json"
    },
  }
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL, options);
    yield put(success('Data Saved !'));
  } catch (err) {
    console.log('err', err);
    yield put(error('Error occurred'));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(SEND_API, getRepos);
}
