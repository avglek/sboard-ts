import { Dispatch } from "redux";
import { ReportAction, ReportActionTypes } from "../../types/reportType";
import DataService from "../../services/DataService";

const dataService = new DataService();

export const modalOpen = (payload: string): ReportAction => {
  return {
    type: ReportActionTypes.REPORT_MODAL_OPEN,
    payload,
  };
};

export const modalClose = (): ReportAction => {
  return {
    type: ReportActionTypes.REPORT_MODAL_CLOSE,
  };
};

export const setView = (payload: string): ReportAction => {
  return {
    type: ReportActionTypes.REPORT_SET_VIEW,
    payload,
  };
};

export const setModalTitle = (payload: string): ReportAction => {
  return {
    type: ReportActionTypes.REPORT_SET_TITLE,
    payload,
  };
};

export const fetchReport = (
  report: string,
  uid: string,
  title = "",
  view = ""
) => {
  return async (dispatch: Dispatch<ReportAction>) => {
    try {
      dispatch({ type: ReportActionTypes.REPORT_LOADING_START });
      dispatch(modalOpen(title));

      const data = await dataService.getReport(report, uid);

      dispatch(setView(view));
      dispatch({
        type: ReportActionTypes.REPORT_FETCH_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: ReportActionTypes.REPORT_FETCH_ERRORED,
        payload: `Ошибка загрузки данных: ${e}`,
      });
    }
  };
};
