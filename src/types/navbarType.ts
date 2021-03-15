export enum NavBarActionTypes {
  NAVBAR_FETCH_ERRORED = "NAVBAR_FETCH_ERRORED",
  NAVBAR_FETCH_SUCCESS = "NAVBAR_FETCH_SUCCESS",
  NAVBAR_LOADING_START = "NAVBAR_LOADING_START",
}

interface INavbarFethSuccess {
  type: NavBarActionTypes.NAVBAR_FETCH_SUCCESS;
  payload: any[];
}
interface INavbarFethError {
  type: NavBarActionTypes.NAVBAR_FETCH_ERRORED;
  payload: string;
}
interface INavbarStartLoading {
  type: NavBarActionTypes.NAVBAR_LOADING_START;
}

export interface INavbarState {
  items: INavButton[];
  loading: boolean;
  error: null | string;
}

export type NavbarAction =
  | INavbarFethError
  | INavbarFethSuccess
  | INavbarStartLoading;

export interface INavButtonProps {
  key: number;
  styleButton: string;
  path: string;
  name: string;
  disabled: boolean;
}

export interface INavButton {
  id: number;
  name: string;
  path: string;
  order_num: number;
  style: string;
  disabled: boolean;
}

export interface INavbarProps {
  className: string;
}
