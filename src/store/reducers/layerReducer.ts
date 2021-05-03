import {
  ILayerState,
  LayerAction,
  LayerActionTypes,
} from "../../types/layerType";

const initialState: ILayerState = {
  items: [],
  findCode: "",
  resetZoom: null,
  lastCheck: null,
  clear: false,
};

export const layerReduser = (
  state = initialState,
  action: LayerAction
): ILayerState => {
  switch (action.type) {
    case LayerActionTypes.LAYER_CLEAR:
      return { ...state, clear: !state.clear };
    case LayerActionTypes.LAYER_CHECKED:
      return { ...state, items: action.payload };
    case LayerActionTypes.LAYER_FIND_STANTION:
      return { ...state, findCode: action.payload };
    case LayerActionTypes.LAYER_RESET_ZOOM:
      return {
        ...state,
        resetZoom: action.payload,
      };
    case LayerActionTypes.LAYER_SET_LAST_CHECK:
      return {
        ...state,
        lastCheck: action.payload,
      };
    default:
      return state;
  }
};
