export class Picket {
  // "code": "31",
  // "param1": "Рег-3 - Рег-6",
  // "param2": "Жихарево - Войбокало",
  // "param3": "90 км 7 пк",
  // "id_piket": "piket_04840"
  code: string;
  id: string;
  params: string[];

  constructor(code: string, id: string, params: string[]) {
    this.code = code;
    this.id = id;
    this.params = params.map((item) => item);
  }

  getParamsTxt() {
    return this.params.join("<br>");
  }
}

export enum PicketActionTypes {
  PICKET_FETCH_ERRORED = "PICKET_FETCH_ERRORED",
  PICKET_FETCH_SUCCESS = "PICKET_FETCH_SUCCESS",
  PICKET_LOADING_START = "PICKET_LOADING_START",
}

interface IPicketFethSuccess {
  type: PicketActionTypes.PICKET_FETCH_SUCCESS;
  payload: Picket[];
}
interface IPicketFethError {
  type: PicketActionTypes.PICKET_FETCH_ERRORED;
  payload: string;
}
interface IPicketStartLoading {
  type: PicketActionTypes.PICKET_LOADING_START;
}
export interface IPicketState {
  items: Picket[];
  loading: boolean;
  error: null | string;
}

export type PicketAction =
  | IPicketFethError
  | IPicketFethSuccess
  | IPicketStartLoading;
