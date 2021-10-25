import { fork } from 'redux-saga/effects';
import { 
  watchCard, watchPage
} from './watchers';

export default function* startForman() {
  yield fork(watchCard)
  yield fork(watchPage)
}