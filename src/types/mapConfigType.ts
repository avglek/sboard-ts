export enum mapConfActionTypes {
  MAPCONF_SET_MAIN = "MAPCONF_SET_MAIN",
}

interface ImapConfSetMain {
  type: mapConfActionTypes.MAPCONF_SET_MAIN;
  payload: IMapStorage;
}

export type mapConfAction = ImapConfSetMain;

export interface IMapDescript {
  map: string;
  url: string;
  img_leg: string | null;
  img_spec: string | null;
  keys: Array<string>;
  uid: number;
}

export interface IMapStorage {
  img: string | null;
  toggle: boolean;
  key: string | null;
  uid: number | undefined;
}
