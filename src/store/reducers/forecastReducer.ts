import {
  IForecastState,
  ForecastAction,
  ForecastActionTypes,
} from "../../types/forecastType";

const initialState: IForecastState = {
  items: [],
  loading: false,
  error: null,
};

export const forecastReduser = (
  state = initialState,
  action: ForecastAction
): IForecastState => {
  switch (action.type) {
    case ForecastActionTypes.FORECAST_LOADING_START:
      return { ...state, loading: true, error: null };
    case ForecastActionTypes.FORECAST_FETCH_SUCCESS:
      return { ...state, loading: false, error: null, items: action.payload };
    case ForecastActionTypes.FORECAST_FETCH_ERRORED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
