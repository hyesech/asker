// Immer
import produce from '../Utils/produce';

// InitialState
const initialState = {
  ask: null, // 딱히 필요한지 모르겠음
  loadAskLoading: false,
  loadAskDone: false,
  loadAskError: null,

  addAskLoading: false,
  addAskDone: false,
  addAskError: null,

  deleteAskLoading: false,
  deleteAskDone: false,
  deleteAskError: null,

  patchAskLoading: false,
  patchAskDone: false,
  patchAskError: null,
};

export const LOAD_ASK_REQUEST = 'LOAD_ASK_REQUEST';
export const LOAD_ASK_SUCCESS = 'LOAD_ASK_SUCCESS';
export const LOAD_ASK_FAILURE = 'LOAD_ASK_FAILURE';

export const ADD_ASK_REQUEST = 'ADD_ASK_REQUEST';
export const ADD_ASK_SUCCESS = 'ADD_ASK_SUCCESS';
export const ADD_ASK_FAILURE = 'ADD_ASK_FAILURE';

export const DELETE_ASK_REQUEST = 'DELETE_ASK_REQUEST';
export const DELETE_ASK_SUCCESS = 'DELETE_ASK_SUCCESS';
export const DELETE_ASK_FAILURE = 'DELETE_ASK_FAILURE';

export const PATCH_ASK_REQUEST_F = 'PATCH_ASK_REQUEST_F';
export const PATCH_ASK_SUCCESS_F = 'PATCH_ASK_SUCCESS_F';
export const PATCH_ASK_FAILURE_F = 'PATCH_ASK_FAILURE_F';

export const PATCH_ASK_REQUEST_T = 'PATCH_ASK_REQUEST_T';
export const PATCH_ASK_SUCCESS_T = 'PATCH_ASK_SUCCESS_T';
export const PATCH_ASK_FAILURE_T = 'PATCH_ASK_FAILURE_T';

// Actions
export const addAskRequestAction = (data) => ({
  type: ADD_ASK_REQUEST,
  data,
});

export const deleteAskRequestAction = (data) => ({
  type: DELETE_ASK_REQUEST,
  data,
});

export const patchAskToFalse = (data) => ({
  type: PATCH_ASK_REQUEST_F,
  data,
});

export const patchAskToTrue = (data) => ({
  type: PATCH_ASK_REQUEST_T,
  data,
});

// Immer 적용한 Reducer
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ASK_REQUEST:
        draft.loadAskLoading = true;
        draft.loadAskDone = false;
        draft.loadAskError = null;
        break;

      case LOAD_ASK_SUCCESS:
        draft.loadAskLoading = false;
        draft.loadAskDone = true;
        draft.ask = action.data;
        break;

      case LOAD_ASK_FAILURE:
        draft.loadAnswerLoading = false;
        draft.loadAnswerError = action.error;
        break;

      case ADD_ASK_REQUEST:
        draft.addAskLoading = true;
        draft.addAskDone = false;
        draft.addAskError = null;
        break;

      case ADD_ASK_SUCCESS:
        draft.addAskLoading = false;
        draft.addAskDone = true;
        break;

      case ADD_ASK_FAILURE:
        draft.addAskLoading = false;
        draft.addAskError = action.error;
        break;

      case DELETE_ASK_REQUEST:
        draft.deleteAskLoading = true;
        draft.deleteAskDone = false;
        draft.deleteAskError = null;
        break;

      case DELETE_ASK_SUCCESS:
        draft.deleteAskLoading = false;
        draft.deleteAskDone = true;
        break;

      case DELETE_ASK_FAILURE:
        draft.deleteAskLoading = false;
        draft.deleteAskError = action.error;
        break;

      case PATCH_ASK_REQUEST_F:
        draft.patchAskLoading = true;
        draft.patchAskDone = false;
        draft.patchAskError = null;
        break;

      case PATCH_ASK_SUCCESS_F:
        draft.patchAskLoading = false;
        draft.patchAskDone = true;
        break;

      case PATCH_ASK_FAILURE_F:
        draft.patchAskLoading = false;
        draft.patchAskError = action.error;
        break;

      case PATCH_ASK_REQUEST_T:
        draft.patchAskLoading = true;
        draft.patchAskDone = false;
        draft.patchAskError = null;
        break;

      case PATCH_ASK_SUCCESS_T:
        draft.patchAskLoading = false;
        draft.patchAskDone = true;
        break;

      case PATCH_ASK_FAILURE_T:
        draft.patchAskLoading = false;
        draft.patchAskError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
