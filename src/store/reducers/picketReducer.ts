import {
  PicketAction,
  PicketActionTypes,
  IPicketState,
} from "../../types/picketTypes";

const initialState: IPicketState = {
  items: [],
  loading: false,
  error: null,
};

export const picketReducer = (
  state = initialState,
  action: PicketAction
): IPicketState => {
  switch (action.type) {
    case PicketActionTypes.PICKET_LOADING_START:
      return { loading: true, error: null, items: [] };
    case PicketActionTypes.PICKET_FETCH_SUCCESS:
      return { loading: false, error: null, items: action.payload };
    case PicketActionTypes.PICKET_FETCH_ERRORED:
      return {
        loading: false,
        error: action.payload,
        items: [],
      };
    default:
      return state;
  }
};
