import {
  ImapSvgState,
  mapSvgAction,
  mapSvgActionTypes,
} from "../../types/mapSvgType";

const initialState: ImapSvgState = {
  map: null,
  loading: false,
  error: null,
  params: null,
};

export const mapSvgReduser = (
  state = initialState,
  action: mapSvgAction
): ImapSvgState => {
  switch (action.type) {
    case mapSvgActionTypes.MAPSVG_LOADING_START:
      return {
        ...state,
        params: action.payload,
        loading: true,
        error: null,
        map: null,
      };
    case mapSvgActionTypes.MAPSVG_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        map: action.payload,
      };
    case mapSvgActionTypes.MAPSVG_FETCH_ERRORED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        map: null,
      };
    default:
      return state;
  }
};
