import { IParams } from "./tableViewType";

export enum ReportActionTypes {
  REPORT_FETCH_ERRORED = "REPORT_FETCH_ERRORED",
  REPORT_FETCH_SUCCESS = "REPORT_FETCH_SUCCESS",
  REPORT_LOADING_START = "REPORT_LOADING_START",
  REPORT_MODAL_OPEN = "REPORT_MODAL_OPEN",
  REPORT_MODAL_CLOSE = "REPORT_MODAL_CLOSE",
  REPORT_SET_VIEW = "REPORT_SET_VIEW",
}

interface IReportFethSuccess {
  type: ReportActionTypes.REPORT_FETCH_SUCCESS;
  payload: IReportMap;
}

interface IReportFethError {
  type: ReportActionTypes.REPORT_FETCH_ERRORED;
  payload: string;
}

interface IReportStartLoading {
  type: ReportActionTypes.REPORT_LOADING_START;
}

interface IReportModalOpen {
  type: ReportActionTypes.REPORT_MODAL_OPEN;
  payload: string;
}

interface IReportModalClose {
  type: ReportActionTypes.REPORT_MODAL_CLOSE;
}

interface IReportSetView {
  type: ReportActionTypes.REPORT_SET_VIEW;
  payload: string;
}

export interface IReportState {
  items: IReportMap;
  loading: boolean;
  error: null | string;
  isOpen: boolean;
  title: string;
  view: string;
}

export interface IReport {
  header: string;
  data: [];
  title?: {
    [key: string]: string | IParams;
  };
}

export interface IReportMap {
  [key: string]: IReport;
}

export type ReportAction =
  | IReportFethError
  | IReportFethSuccess
  | IReportStartLoading
  | IReportModalClose
  | IReportModalOpen
  | IReportSetView;
