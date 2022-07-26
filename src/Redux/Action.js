import {SET_BUSY, SET_FREE, SET_MENU} from './ActionType';

export const setBusy = () => {
  return {
    type: SET_BUSY,
  };
};

export const setFree = () => {
  return {
    type: SET_FREE,
  };
};

export const setMenu = data => {
  return {
    type: SET_MENU,
    payload: data,
  };
};
