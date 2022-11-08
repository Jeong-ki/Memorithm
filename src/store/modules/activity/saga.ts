import { takeEvery, call, put } from 'redux-saga/effects';

import { fetchActivities } from '../../../apis/modules/activity';
import { FETCH_ACTIVITIES } from './reducer';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* fetch() {
  try {
    const activities: ResponseGenerator = yield call(fetchActivities);
    yield put({ type: FETCH_ACTIVITIES.SUCCESS, payload: { activities } });
  } catch (e: any) {
    yield put({ type: FETCH_ACTIVITIES.FAILURE, payload: { message: e.message } });
  }
}

export default [takeEvery(FETCH_ACTIVITIES.REQUEST, fetch)];
