import {
  ImapSvgState,
  mapSvgAction,
  mapSvgActionTypes,
} from "../../types/mapSvgType";

const initialState: ImapSvgState = {
  success: false,
  loading: false,
  error: null,
  descript: null,
  callplace: 0,
};

export const mapSvgReduser = (
  state = initialState,
  action: mapSvgAction
): ImapSvgState => {
  switch (action.type) {
    case mapSvgActionTypes.MAPSVG_LOADING_START:
      return {
        ...state,
        descript: action.payload,
        loading: true,
        success: false,
        error: null,
      };
    case mapSvgActionTypes.MAPSVG_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case mapSvgActionTypes.MAPSVG_FETCH_ERRORED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case mapSvgActionTypes.MAPSVG_SET_CALLPLACE:
      return {
        ...state,
        callplace: action.payload,
      };
    case mapSvgActionTypes.MAPSVG_SET_SUCCESS:
      return {
        ...state,
        success: true,
      };
    default:
      return state;
  }
};
