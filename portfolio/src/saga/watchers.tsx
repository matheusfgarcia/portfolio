import * as types from '../actions';
import { takeLatest } from 'redux-saga/effects';
import { flipCard } from './card';
import { activePage } from './page';


export function* watchCard() {
  yield takeLatest(types.FLIP_CARD,flipCard)
}

export function* watchPage() {
  yield takeLatest(types.ACTIVE_PAGE,activePage)
}