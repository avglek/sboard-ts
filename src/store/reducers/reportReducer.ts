import {
  IReportState,
  ReportAction,
  ReportActionTypes,
} from "../../types/reportType";

const initialState: IReportState = {
  items: {},
  loading: false,
  error: null,
  isOpen: false,
  title: "",
  view: "",
};

export const reportReduser = (
  state = initialState,
  action: ReportAction
): IReportState => {
  switch (action.type) {
    case ReportActionTypes.REPORT_MODAL_OPEN:
      return { ...state, isOpen: true, title: action.payload };
    case ReportActionTypes.REPORT_MODAL_CLOSE:
      return { ...state, isOpen: false };
    case ReportActionTypes.REPORT_LOADING_START:
      return { ...state, loading: true, error: null, items: {} };
    case ReportActionTypes.REPORT_FETCH_SUCCESS:
      return { ...state, loading: false, error: null, items: action.payload };
    case ReportActionTypes.REPORT_FETCH_ERRORED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: {},
      };
    case ReportActionTypes.REPORT_SET_VIEW:
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
};
