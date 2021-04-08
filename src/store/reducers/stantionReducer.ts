import {
  StantionAction,
  StantionActionTypes,
  IStantionState,
} from "../../types/stantionType";

const initialState: IStantionState = {
  items: [],
  loading: false,
  error: null,
};

export const stantionReduser = (
  state = initialState,
  action: StantionAction
): IStantionState => {
  switch (action.type) {
    case StantionActionTypes.STANTION_LOADING_START:
      return { loading: true, error: null, items: [] };
    case StantionActionTypes.STANTION_FETCH_SUCCESS:
      return { loading: false, error: null, items: action.payload };
    case StantionActionTypes.STANTION_FETCH_ERRORED:
      return {
        loading: false,
        error: action.payload,
        items: [],
      };
    default:
      return state;
  }
};
