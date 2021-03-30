import {
  IMapStorage,
  mapConfAction,
  mapConfActionTypes,
} from "../../types/mapConfigType";

const initialState: IMapStorage = {
  img: null,
  toggle: true,
  key: null,
  uid: undefined,
};

export const mapConfReducer = (
  state = initialState,
  action: mapConfAction
): IMapStorage => {
  switch (action.type) {
    case mapConfActionTypes.MAPCONF_SET_MAIN:
      return action.payload;
    default:
      return state;
  }
};
