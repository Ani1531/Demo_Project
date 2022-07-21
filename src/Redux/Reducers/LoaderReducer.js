import {SET_BUSY, SET_FREE} from '../ActionType';

const initialState = {
  showSpinner: false,
};

function LoaderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BUSY:
      return {showSpinner: true};
    case SET_FREE:
      return initialState;
    default:
      return state;
  }
}

export default LoaderReducer;
