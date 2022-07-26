import {SET_MENU} from '../ActionType';

const initialState = {
  MenuData: [],
};

function MenuReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MENU:
      return {MenuData: action.payload};
    default:
      return state;
  }
}

export default MenuReducer;
