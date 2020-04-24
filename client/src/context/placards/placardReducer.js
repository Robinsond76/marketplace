import {
  GET_PLACARDS,
  GET_PLACARD,
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
    case GET_PLACARD:
      return {
        ...state,
        placard: state.placards.filter(
          (placard) => placard._id === action.payload
        ),
      };
    default:
      return state;
  }
};
