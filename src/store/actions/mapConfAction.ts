import {
  mapConfActionTypes,
  mapConfAction,
  IMapStorage,
} from "../../types/mapConfigType";

export const setConfMain = (payload: IMapStorage): mapConfAction => {
  return {
    type: mapConfActionTypes.MAPCONF_SET_MAIN,
    payload,
  };
};
