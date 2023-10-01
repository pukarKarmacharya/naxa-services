import { put, call, takeEvery } from 'redux-saga/effects';
import{GET_SERVICES_SUCCESS, GET_SERVICES_FETCH} from '../actions/actions';
import { API_SERVICES_URL } from '../../helpers/constants';


function serviceFetch(){
	return fetch(API_SERVICES_URL).then(response => response.json())
}

function* workGetServicesFetch(){
	const services = yield call(serviceFetch);
	yield put({type: GET_SERVICES_SUCCESS, services})
}

function* mySaga(){
	yield takeEvery(GET_SERVICES_FETCH, workGetServicesFetch);
}

export default mySaga;