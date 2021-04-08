import { Dispatch } from "redux";
import { PicketAction, PicketActionTypes } from "../../types/picketTypes";
import DataService from "../../services/DataService";

const dataService = new DataService();

export const fetchPicket = () => {
  return async (dispatch: Dispatch<PicketAction>) => {
    try {
      dispatch({ type: PicketActionTypes.PICKET_LOADING_START });
      const data = await dataService.getPicket();
      dispatch({
        type: PicketActionTypes.PICKET_FETCH_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: PicketActionTypes.PICKET_FETCH_ERRORED,
        payload: `Ошибка загрузки данных: ${e}`,
      });
    }
  };
};
