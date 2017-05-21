import { call, put, takeLatest } from 'redux-saga/effects'
import { convertUnixtime } from '../api'

function * convertUnixtimeSaga (action) {
  try {
    const converted = yield call(convertUnixtime, action.text)
    yield put({type: 'CONVERT_UNIXTIME_SUCCEEDED', value: converted})
  } catch (e) {
    yield put({type: 'CONVERT_UNIXTIME_FAILED', message: e.message})
  }
}

function * mySaga () {
  yield takeLatest('UPDATE_UNIXTIME', convertUnixtimeSaga)
}

export default mySaga
