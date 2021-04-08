import { Dispatch } from "redux";
import { StantionAction, StantionActionTypes } from "../../types/stantionType";
import DataService from "../../services/DataService";

const dataService = new DataService();

export const fetchStantion = () => {
  return async (dispatch: Dispatch<StantionAction>) => {
    try {
      dispatch({ type: StantionActionTypes.STANTION_LOADING_START });
      const data = await dataService.getStantions();
      dispatch({
        type: StantionActionTypes.STANTION_FETCH_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: StantionActionTypes.STANTION_FETCH_ERRORED,
        payload: `Ошибка загрузки данных: ${e}`,
      });
    }
  };
};
