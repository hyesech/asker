import produce from '../Utils/produce';

// InitialState
const initialState = {
  asks: [],

  loadAsksLoading: false,
  loadAsksDone: false,
  loadAsksError: null,

  // Infinite Scrolling
  hasMoreAsks: true,
};

export const LOAD_ASKS_REQUEST = 'LOAD_ASKS_REQUEST';
export const LOAD_ASKS_SUCCESS = 'LOAD_ASKS_SUCCESS';
export const LOAD_ASKS_FAILURE = 'LOAD_ASKS_FAILURE';

// Immer 적용한 Reducer
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ASKS_REQUEST:
        draft.loadAsksLoading = true;
        draft.loadAsksDone = false;
        draft.loadAsksError = null;
        break;

      case LOAD_ASKS_SUCCESS:
        draft.loadAsksLoading = false;
        draft.loadAsksDone = true;
        draft.asks = draft.asks.concat(action.data);
        draft.hasMoreAsks = draft.asks.length === 10;
        break;

      case LOAD_ASKS_FAILURE:
        draft.loadAsksLoading = false;
        draft.loadAsksError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
