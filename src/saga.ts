import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { countActions } from './CountReducer'

const wait1sec = (): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve() }, 1000)
    })
}

const getCount = (): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(4) }, 1000)
    })
}

function* slowHelloWorld(action: any) {
    yield call(wait1sec)
    console.log('hello world')
    const data = yield call(getCount)
    yield put(countActions.countup(data))
}

function* mySaga() {
    yield takeEvery(countActions.slowHelloWorld, slowHelloWorld);
}

export default mySaga;