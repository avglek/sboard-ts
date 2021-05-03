import {
  LayerAction,
  LayerActionTypes,
  LayerDescript,
} from "../../types/layerType";

export const setResetZoom = (payload: () => void): LayerAction => {
  return {
    type: LayerActionTypes.LAYER_RESET_ZOOM,
    payload,
  };
};

export const postLayer = (payload: LayerDescript[]): LayerAction => {
  return {
    type: LayerActionTypes.LAYER_CHECKED,
    payload,
  };
};

export const postClear = (): LayerAction => {
  return {
    type: LayerActionTypes.LAYER_CLEAR,
  };
};

export const postFindStantion = (payload: string): LayerAction => {
  return {
    type: LayerActionTypes.LAYER_FIND_STANTION,
    payload,
  };
};

export const setLastCheck = (payload: LayerDescript): LayerAction => {
  return {
    type: LayerActionTypes.LAYER_SET_LAST_CHECK,
    payload,
  };
};
