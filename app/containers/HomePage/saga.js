/**
 * Gets the repositories of the user from Github
 */

import { put } from 'redux-saga/effects';
import { getDataCovid, errorGetDataCovid } from './actions';

import http from '../../helpers/http';

/**
 * Github repos request/response handler
 */
export async function* getDataCovidSaga(country) {
  try {
    const response = await http().get(`countries/${country}/confirmed`);
    yield put(getDataCovid(response.data[0]));
  } catch (err) {
    yield put(errorGetDataCovid(err));
  }
}
