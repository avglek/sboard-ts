export interface IMapConfig {
  map: string;
  url: string;
  img_leg: string | null;
  img_spec: string | null;
  keys: Array<string>;
}

export type mapConfigType = IMapConfig | undefined;

export enum mapActionTypes {
  MAP_LOADING_START = "MAP_LOADING_START",
  MAP_LOADING_END = "MAP_LOADING_END",
}

interface IMapStartLoading {
  type: mapActionTypes.MAP_LOADING_START;
  payload: IMapConfig;
}

interface IMapStopLoading {
  type: mapActionTypes.MAP_LOADING_END;
}

export interface IMapState {
  loading: boolean;
  config: IMapConfig | null;
  error: string | null;
}

export type mapAction = IMapStartLoading | IMapStopLoading;
