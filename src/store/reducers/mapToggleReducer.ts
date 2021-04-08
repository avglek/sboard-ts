import {
  IMapToggleStorage,
  mapToggleAction,
  mapToggleActionTypes,
} from "../../types/mapToggleType";

const initialState: IMapToggleStorage = {
  img: null,
  toggle: true,
  key: null,
  uid: undefined,
};

export const mapToggleReducer = (
  state = initialState,
  action: mapToggleAction
): IMapToggleStorage => {
  switch (action.type) {
    case mapToggleActionTypes.MAPTOGGLE_SET_MAIN:
      return action.payload;
    default:
      return state;
  }
};
