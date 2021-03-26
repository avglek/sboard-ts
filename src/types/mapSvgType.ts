import { IConfigURL } from "./mapConfigType";

export enum mapSvgActionTypes {
  MAPSVG_FETCH_ERRORED = "MAPSVG_FETCH_ERRORED",
  MAPSVG_FETCH_SUCCESS = "MAPSVG_FETCH_SUCCESS",
  MAPSVG_LOADING_START = "MAPSVG_LOADING_START",
}

interface ImapSvgFethSuccess {
  type: mapSvgActionTypes.MAPSVG_FETCH_SUCCESS;
  payload: HTMLElement;
}
interface ImapSvgFethError {
  type: mapSvgActionTypes.MAPSVG_FETCH_ERRORED;
  payload: string;
}
interface ImapSvgStartLoading {
  type: mapSvgActionTypes.MAPSVG_LOADING_START;
  payload: IConfigURL;
}

export interface ImapSvgState {
  map: HTMLElement | null;
  loading: boolean;
  error: null | string;
  params: IConfigURL | null;
}

export type mapSvgAction =
  | ImapSvgFethError
  | ImapSvgFethSuccess
  | ImapSvgStartLoading;
