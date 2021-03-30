import { Dispatch } from "redux";
import { ForecastAction, ForecastActionTypes } from "../../types/forecastType";
import DataService from "../../services/DataService";

const dataService = new DataService();

export const fetchForecast = (id: number) => {
  return async (dispatch: Dispatch<ForecastAction>) => {
    try {
      dispatch({ type: ForecastActionTypes.FORECAST_LOADING_START });
      const data = await dataService.getPrognoz(id);
      dispatch({
        type: ForecastActionTypes.FORECAST_FETCH_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: ForecastActionTypes.FORECAST_FETCH_ERRORED,
        payload: `Ошибка загрузки данных: ${e}`,
      });
    }
  };
};
