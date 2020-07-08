import {extend} from "./utils.js";

const initialState = {
  genre: `All`,
};

const ActionType = {
  FILTER_BY_GENRE: `FILTER_BY_GENRE`,
  GETTING_A_FILTERED_LIST: `GETTING_A_FILTERED_LIST`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_BY_GENRE:
      return extend(state, {genre: action.payload});
  }
  return state;
};

export {reducer, ActionType};
