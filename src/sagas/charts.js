import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { getAllCharts } from '../services/charts';
import { message } from 'antd';

function* getCharts() {
    try {
        const { jsonResult } = yield call(getAllCharts);
        if (jsonResult.data) {
            yield put({
                type: 'charts/getAll/success',
                payload: jsonResult.data,
            });
        }
    } catch (err) {
        message.error(err);
        //yield put({
        //  type: 'charts/get/failed',
        //  err,
        //});
    }
}

function* watchChartsGet() {
    yield takeLatest('charts/getAll', getCharts)
}

export default function* () {
    yield fork(watchChartsGet);

    yield put({
        type: 'charts/getAll'
    });
}
