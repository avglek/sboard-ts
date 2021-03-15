import {
  INavbarState,
  NavbarAction,
  NavBarActionTypes,
} from "../../types/navbarType";

const initialState: INavbarState = {
  items: [],
  loading: false,
  error: null,
};

export const navbarReduser = (
  state = initialState,
  action: NavbarAction
): INavbarState => {
  switch (action.type) {
    case NavBarActionTypes.NAVBAR_LOADING_START:
      return { loading: true, error: null, items: [] };
    case NavBarActionTypes.NAVBAR_FETCH_SUCCESS:
      return { loading: false, error: null, items: action.payload };
    case NavBarActionTypes.NAVBAR_FETCH_ERRORED:
      return {
        loading: false,
        error: action.payload,
        items: [],
      };
    default:
      return state;
  }
};
