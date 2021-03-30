export enum ForecastActionTypes {
  FORECAST_FETCH_ERRORED = "FORECAST_FETCH_ERRORED",
  FORECAST_FETCH_SUCCESS = "FORECAST_FETCH_SUCCESS",
  FORECAST_LOADING_START = "FORECAST_LOADING_START",
}

interface IForecastFethSuccess {
  type: ForecastActionTypes.FORECAST_FETCH_SUCCESS;
  payload: any[];
}
interface IForecastFethError {
  type: ForecastActionTypes.FORECAST_FETCH_ERRORED;
  payload: string;
}
interface IForecastStartLoading {
  type: ForecastActionTypes.FORECAST_LOADING_START;
}

export interface IForecastState {
  items: IForecastItem[];
  loading: boolean;
  error: null | string;
}

export type ForecastAction =
  | IForecastFethError
  | IForecastFethSuccess
  | IForecastStartLoading;

export interface IForecastItem {
  region: string;
  date: string;
  night: {
    period: string;
    prognoz: string;
  };
  day: {
    period: string;
    prognoz: string;
  };
}
