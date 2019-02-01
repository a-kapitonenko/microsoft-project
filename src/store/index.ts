import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { all } from 'redux-saga/effects';

export interface ApplicationState {
  routing: RouterState;
}

export const rootReducer = combineReducers<ApplicationState>({
  routing: routerReducer,
});

export function* rootSaga() {
  yield all([
    // fork(framesSaga),
  ]);
}
