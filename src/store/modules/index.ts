import { combineReducers } from 'redux';
import { ForkEffect } from 'redux-saga/effects';

// eslint-disable-next-line import/extensions
import activity from './activity';

const combineSagas = (param: { [key: string]: ForkEffect<never>[] }) =>
  // eslint-disable-next-line func-names
  function* () {
    const targetSagas = Object.values(param).flat();

    for (let i = 0; i < targetSagas.length; i++) {
      yield targetSagas[i];
    }
  };

export default {
  rootReducer: combineReducers({ activity: activity.reducer }),
  rootSagas: combineSagas({ activity: activity.saga }),
};
