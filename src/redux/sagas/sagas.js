import { put, call, takeEvery } from 'redux-saga/effects';
import{GET_SERVICES_SUCCESS, GET_SERVICES_FETCH} from '../actions/actions';

function serviceFetch(){
	return fetch('https://admin.naxa.com.np/api/services').then(response => response.json())
}

function* workGetServicesFetch(){
	const services = yield call(serviceFetch);
	yield put({type: GET_SERVICES_SUCCESS, services})
}

function* mySaga(){
	yield takeEvery(GET_SERVICES_FETCH, workGetServicesFetch);
}

export default mySaga;