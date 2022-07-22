import {SET_BUSY, SET_FREE} from './ActionType';

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
