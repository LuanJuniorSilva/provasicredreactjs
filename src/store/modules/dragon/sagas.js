import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { getDragonsSuccess, dragonFailure } from './actions';
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

export default all([takeLatest('@dragon/GET_ALL_REQUEST', getAllDragons)]);
