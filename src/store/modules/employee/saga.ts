import { takeEvery, call, put } from 'redux-saga/effects';

import { fetchEmployees } from '../../../apis/modules/employee';
import { FETCH_EMPLOYEES } from './reducer';

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
    const employees: ResponseGenerator = yield call(fetchEmployees);
    yield put({ type: FETCH_EMPLOYEES.SUCCESS, payload: { employees } });
  } catch (e: any) {
    yield put({ type: FETCH_EMPLOYEES.FAILURE, payload: { message: e.message } });
  }
}

export default [takeEvery(FETCH_EMPLOYEES.REQUEST, fetch)];
