import { Dispatch } from "react";
import DataService from "../../services/DataService";
import {
  StormAction,
  StormActionTypes,
  StormItem,
} from "../../types/stormType";

const dataService = new DataService();

const stormStartLoad = (): StormAction => {
  return {
    type: StormActionTypes.STORM_START_LOADING,
  };
};

const stormFetchError = (payload: string): StormAction => {
  return {
    type: StormActionTypes.STORM_FETCH_ERRORED,
    payload,
  };
};

const stormFetchSuccess = (payload: StormItem[]): StormAction => {
  return {
    type: StormActionTypes.STORM_FETCH_SUCCESS,
    payload,
  };
};

export const fecthStorm = (id: number) => {
  return async (dispatch: Dispatch<StormAction>) => {
    dispatch(stormStartLoad());
    try {
      const data = await dataService.getStorm(id);
      dispatch(stormFetchSuccess(data));
    } catch (error) {
      dispatch(stormFetchError(error));
    }
  };
};
