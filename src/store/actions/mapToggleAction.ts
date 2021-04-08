import {
  mapToggleActionTypes,
  mapToggleAction,
  IMapToggleStorage,
} from "../../types/mapToggleType";

export const setConfMain = (payload: IMapToggleStorage): mapToggleAction => {
  return {
    type: mapToggleActionTypes.MAPTOGGLE_SET_MAIN,
    payload,
  };
};
