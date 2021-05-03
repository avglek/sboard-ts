import {
  mapSvgAction,
  mapSvgActionTypes,
  IMapDescript,
} from "../../types/mapSvgType";

export const loadMap = (payload: IMapDescript): mapSvgAction => {
  return {
    type: mapSvgActionTypes.MAPSVG_LOADING_START,
    payload,
  };
};

export const fetchMapSuccess = (): mapSvgAction => {
  return {
    type: mapSvgActionTypes.MAPSVG_FETCH_SUCCESS,
  };
};

export const fetchMapError = (payload: string): mapSvgAction => {
  return {
    type: mapSvgActionTypes.MAPSVG_FETCH_ERRORED,
    payload,
  };
};

export const setCallplace = (payload: number): mapSvgAction => {
  return {
    type: mapSvgActionTypes.MAPSVG_SET_CALLPLACE,
    payload,
  };
};

export const setSuccess = (): mapSvgAction => {
  return {
    type: mapSvgActionTypes.MAPSVG_SET_SUCCESS,
  };
};
