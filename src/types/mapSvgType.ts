export enum mapSvgActionTypes {
  MAPSVG_FETCH_ERRORED = "MAPSVG_FETCH_ERRORED",
  MAPSVG_FETCH_SUCCESS = "MAPSVG_FETCH_SUCCESS",
  MAPSVG_LOADING_START = "MAPSVG_LOADING_START",
  MAPSVG_SET_CALLPLACE = "MAPSVG_SET_CALLPLACE",
}

interface ImapSvgFethSuccess {
  type: mapSvgActionTypes.MAPSVG_FETCH_SUCCESS;
}
interface ImapSvgFethError {
  type: mapSvgActionTypes.MAPSVG_FETCH_ERRORED;
  payload: string;
}
interface ImapSvgStartLoading {
  type: mapSvgActionTypes.MAPSVG_LOADING_START;
  payload: IMapDescript;
}
interface ImapSvgSetCallplace {
  type: mapSvgActionTypes.MAPSVG_SET_CALLPLACE;
  payload: number;
}

export interface ImapSvgState {
  success: boolean;
  loading: boolean;
  error: null | string;
  descript: IMapDescript | null;
  callplace: number;
}

export type mapSvgAction =
  | ImapSvgFethError
  | ImapSvgFethSuccess
  | ImapSvgStartLoading
  | ImapSvgSetCallplace;

export interface IMapDescript {
  map: string;
  url: string;
  img_leg: string | null;
  img_spec: string | null;
  keys: Array<string>;
  uid: number;
}
