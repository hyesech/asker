import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import ask from './ask';
import asks from './asks';
import auth from './auth';
import answer from './answer';
import answers from './answers';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        ask,
        asks,
        auth,
        answer,
        answers,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
