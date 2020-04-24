import {
  GET_PLACARDS,
  ADD_PLACARD,
  DELETE_PLACARD,
  UPDATE_PLACARD,
  FILTER_PLACARD,
  CLEAR_PLACARD,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PLACARD:
      return {
        ...state,
        placards: [...state.placards, action.payload],
      };
    default:
      return state;
  }
};
