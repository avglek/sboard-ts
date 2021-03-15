import { Dispatch } from "redux";
import { NavbarAction, NavBarActionTypes } from "../../types/navbarType";
import DataService from "../../services/DataService";

const dataService = new DataService();

export const fetchNavbar = () => {
  return async (dispatch: Dispatch<NavbarAction>) => {
    try {
      dispatch({ type: NavBarActionTypes.NAVBAR_LOADING_START });
      const data = await dataService.getMenu();
      dispatch({
        type: NavBarActionTypes.NAVBAR_FETCH_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: NavBarActionTypes.NAVBAR_FETCH_ERRORED,
        payload: `Ошибка загрузки данных: ${e}`,
      });
    }
  };
};
