import { Dispatch } from "redux";
import { mapSvgAction, mapSvgActionTypes } from "../../types/mapSvgType";
import DataService from "../../services/DataService";
//import { IConfigURL } from "../../types/mapConfigType";
import { getMapConfig } from "../../utils/mapUtils";

const dataService = new DataService();

export const loadMapSvg = (selector: string) => {
  console.log("start loading:", selector);
  const current = getMapConfig(selector);

  console.log("a:", current);

  if (current) {
    return async (dispatch: Dispatch<mapSvgAction>) => {
      try {
        dispatch({
          type: mapSvgActionTypes.MAPSVG_LOADING_START,
          payload: current,
        });
        console.log("current url:", current.url);
        const data = await dataService.getSvgXML(current.url);
        dispatch({
          type: mapSvgActionTypes.MAPSVG_FETCH_SUCCESS,
          payload: data,
        });
      } catch (e) {
        dispatch({
          type: mapSvgActionTypes.MAPSVG_FETCH_ERRORED,
          payload: `Ошибка загрузки карты: ${e}`,
        });
      }
    };
  } else {
    return {
      type: mapSvgActionTypes.MAPSVG_FETCH_ERRORED,
      payload: `Ошибка загрузки карты: config is null`,
    };
  }
};
