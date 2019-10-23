import { put } from 'redux-saga/effects';

export function* deptSaga() {
    yield put({type: 'DEPT_FETCH_SUCCESS', payload: true});
}