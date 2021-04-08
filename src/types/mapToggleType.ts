export enum mapToggleActionTypes {
  MAPTOGGLE_SET_MAIN = "MAPTOGGLE_SET_MAIN",
}

interface ImapToggleSetMain {
  type: mapToggleActionTypes.MAPTOGGLE_SET_MAIN;
  payload: IMapToggleStorage;
}

export type mapToggleAction = ImapToggleSetMain;

export interface IMapToggleStorage {
  img: string | null;
  toggle: boolean;
  key: string | null;
  uid: number | undefined;
}
