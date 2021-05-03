// Описатель слоя
export type LayerDescript = {
  layer: string; //Наименование слоя на карте
  check: boolean; //Выбран
  name: string; //Полное наименование
  visible: string; //Видимость checkbox
  disabled: boolean; //Enable checkbox
  id: number; //Уникальный индентификатор
  group: number; //Индентификатор группы
};

//Описатель группы слоев
export type LayerGroupDescript = {
  title: string; // Заголовок группы
  group: number; //Индентификатор группы
};

export enum LayerActionTypes {
  LAYER_CHECKED = "LAYER_CHECKED",
  LAYER_FIND_STANTION = "LAYER_FIND_STANTION",
  LAYER_RESET_ZOOM = "LAYER_RESET_ZOOM",
  LAYER_SET_LAST_CHECK = "LAYER_SET_LAST_CHECK",
  LAYER_CLEAR = "LAYER_CLEAR",
}

interface ILayerClear {
  type: LayerActionTypes.LAYER_CLEAR;
}

interface ILayerChecked {
  type: LayerActionTypes.LAYER_CHECKED;
  payload: LayerDescript[];
}

interface ILayerFindStantion {
  type: LayerActionTypes.LAYER_FIND_STANTION;
  payload: string;
}

interface ILayerResetZoom {
  type: LayerActionTypes.LAYER_RESET_ZOOM;
  payload: () => void;
}

interface ILayerSetLastCheck {
  type: LayerActionTypes.LAYER_SET_LAST_CHECK;
  payload: LayerDescript;
}

export interface ILayerState {
  items: LayerDescript[];
  findCode: string;
  resetZoom: null | (() => void);
  lastCheck: LayerDescript | null;
  clear: boolean;
}

export type LastCheck = {
  uid: number;
  name: string;
  check: boolean;
};

export type LayerAction =
  | ILayerChecked
  | ILayerFindStantion
  | ILayerResetZoom
  | ILayerSetLastCheck
  | ILayerClear;
