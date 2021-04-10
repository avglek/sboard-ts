// Описатель слоя
export type LayerDescript = {
  layer: string; //Наименование слоя на карте
  show: boolean; //Начальная видимость
  name: string; //Полное наименование
  visible: string; //Видимость checkbox
  disabled: boolean; //Enable checkbox
  id: number; //Уникальный индентификатор
};

//Описатель группы слоев
export type LayerGroupDescript = {
  title: string;
  groupIndex: number;
  data: LayerDescript[];
};

export enum LayerActionTypes {
  LAYER_CHECKED = "LAYER_CHECKED",
  LAYER_FIND_STANTION = "LAYER_FIND_STANTION",
  LAYER_RESET_ZOOM = "LAYER_RESET_ZOOM",
  LAYER_SET_LAST_CHECK = "LAYER_SET_LAST_CHECK",
}

interface ILayerChecked {
  type: LayerActionTypes.LAYER_CHECKED;
  payload: LayerGroupDescript[];
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
  payload: { name: string; check: boolean };
}

export interface ILayerState {
  items: LayerGroupDescript[];
  findCode: string;
  resetZoom: null | (() => void);
  lastCheck: LastCheck;
}

export type LastCheck = {
  name: string;
  check: boolean;
}

export type LayerAction =
  | ILayerChecked
  | ILayerFindStantion
  | ILayerResetZoom
  | ILayerSetLastCheck;
