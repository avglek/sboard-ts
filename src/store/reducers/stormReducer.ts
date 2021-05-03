import {
  StormAction,
  StormActionTypes,
  StormState,
} from "../../types/stormType";

const initialState: StormState = {
  loading: true,
  error: null,
  items: [],
};

export const stormReducer = (
  state = initialState,
  action: StormAction
): StormState => {
  switch (action.type) {
    case StormActionTypes.STORM_START_LOADING:
      return {
        ...state,
        error: null,
        items: [],
        loading: true,
      };
    case StormActionTypes.STORM_FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        items: action.payload,
        loading: false,
      };

    case StormActionTypes.STORM_FETCH_ERRORED:
      return {
        ...state,
        items: [],
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
