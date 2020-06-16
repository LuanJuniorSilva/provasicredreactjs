import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { getDragonsSuccess, dragonFailure, getDragonSuccess } from './actions';
import { apiDefault } from '../../../services/api';

export function* getAllDragons() {
  try {
    const response = yield call(apiDefault.get);

    const listDragons = response.data;

    yield put(getDragonsSuccess(listDragons));
  } catch (error) {
    toast.error('Falha ao buscar lista de dragões');
    yield put(dragonFailure());
  }
}

export function* getDragon({ id }) {
  try {
    const response = yield call(apiDefault.get, `/${id}`);

    const dragon = response.data;

    yield put(getDragonSuccess(dragon));
  } catch (error) {
    toast.error('Falha ao buscar dragão');
    yield put(dragonFailure());
  }
}

export default all([
  takeLatest('@dragon/GET_ALL_REQUEST', getAllDragons),
  takeLatest('@dragon/GET_REQUEST', getDragon),
]);
