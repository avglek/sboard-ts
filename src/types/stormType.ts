export enum StormActionTypes {
  STORM_START_LOADING = "STORM_START_LOADING",
  STORM_FETCH_ERRORED = "STORM_FETCH_ERRORED",
  STORM_FETCH_SUCCESS = "STORM_FETCH_SUCCESS",
}

export interface StormState {
  loading: boolean;
  error: string | null;
  items: StormItem[];
}

interface IStormStartLoader {
  type: StormActionTypes.STORM_START_LOADING;
}

interface IStormFetchErrored {
  type: StormActionTypes.STORM_FETCH_ERRORED;
  payload: string;
}

interface IStormFetchSuccess {
  type: StormActionTypes.STORM_FETCH_SUCCESS;
  payload: StormItem[];
}

export type StormAction =
  | IStormFetchSuccess
  | IStormFetchErrored
  | IStormStartLoader;

export interface StormItem {
  train: string;
  conditions: [ICondition];
}

export interface ICondition {
  code: number;
  info: string;
  begin: string;
  end: string;
  critical: boolean;
}

export interface StormIcon extends StormItem {
  icon: string;
}
