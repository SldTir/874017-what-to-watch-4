import {reducer, ActionType, ActionCreator} from "./reducer.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All`,
  });
});

it(`ChecksTheChangeOfTheGenre`, () => {
  expect(reducer({
    genre: `All`
  }, {
    type: ActionType.FILTER_BY_GENRE,
    payload: `Comedies`,
  })).toEqual({
    genre: `Comedies`,
  });

  expect(reducer({
    genre: `All`
  }, {
    type: ActionType.FILTER_BY_GENRE,
    payload: `Crime`,
  })).toEqual({
    genre: `Crime`,
  });
});

describe(`Action creators work correctly`, () => {
  it(`ActionCreatorToSelectAFilter`, () => {
    expect(ActionCreator.selectsFilter(`Romance`)).toEqual({
      type: ActionType.FILTER_BY_GENRE,
      payload: `Romance`,
    });
  });
});
