// Immer
import produce from '../Utils/produce';

// InitialState
const initialState = {
  answer: null,

  // GET
  loadAnswerLoading: false,
  loadAnswerDone: false,
  loadAnswerError: null,

  // POST
  addAnswerLoading: false,
  addAnswerDone: false,
  addAnswerError: null,

  // DELETE
  removeAnswerLoading: false,
  removeAnswerDone: false,
  removeAnswerError: null,
};

export const LOAD_ANSWER_REQUEST = 'LOAD_ANSWER_REQUEST';
export const LOAD_ANSWER_SUCCESS = 'LOAD_ANSWER_SUCCESS';
export const LOAD_ANSWER_FAILURE = 'LOAD_ANSWER_FAILURE';

export const ADD_ANSWER_REQUEST = 'ADD_ANSWER_REQUEST';
export const ADD_ANSWER_SUCCESS = 'ADD_ANSWER_SUCCESS';
export const ADD_ANSWER_FAILURE = 'ADD_ANSWER_FAILURE';

export const REMOVE_ANSWER_REQUEST = 'REMOVE_ANSWER_REQUEST';
export const REMOVE_ANSWER_SUCCESS = 'REMOVE_ANSWER_SUCCESS';
export const REMOVE_ANSWER_FAILURE = 'REMOVE_ANSWER_FAILURE';

// Actions
export const addAnswerRequestAction = (data) => ({
  type: ADD_ANSWER_REQUEST,
  data,
});

export const removeAnswerRequestAction = (data) => ({
  type: REMOVE_ANSWER_REQUEST,
  data,
});

// Immer 적용한 Reducer
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ANSWER_REQUEST:
        draft.loadAnswerLoading = true;
        draft.loadAnswerDone = false;
        draft.loadAnswerError = null;
        break;

      case LOAD_ANSWER_SUCCESS:
        draft.loadAnswerLoading = false;
        draft.loadAnswerDone = true;
        draft.answer = action.data;
        break;

      case LOAD_ANSWER_FAILURE:
        draft.loadAnswerLoading = false;
        draft.loadAnswerError = action.error;
        break;

      case ADD_ANSWER_REQUEST:
        draft.addAnswerLoading = true;
        draft.addAnswerDone = false;
        draft.addAnswerError = null;
        break;

      case ADD_ANSWER_SUCCESS:
        draft.addAnswerLoading = false;
        draft.addAnswerDone = true;
        draft.answer = action.data;
        break;

      case ADD_ANSWER_FAILURE:
        draft.addAnswerLoading = false;
        draft.addAnswerError = action.error;
        break;

      case REMOVE_ANSWER_REQUEST:
        draft.removeAnswerLoading = true;
        draft.removeAnswerDone = false;
        draft.removeAnswerError = null;
        break;

      case REMOVE_ANSWER_SUCCESS:
        draft.removeAnswerLoading = false;
        draft.removeAnswerDone = true;
        break;

      case REMOVE_ANSWER_FAILURE:
        draft.removeAnswerLoading = false;
        draft.removeAnswerError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
