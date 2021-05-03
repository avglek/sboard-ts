import React from "react";

interface node {
  id: string;
  name: string;
}

export class Stantion {
  ks: string;
  ms: string;
  km: string;
  nodes: node[];
  region: string;

  constructor(
    ks: string,
    ms: string,
    km: string,
    nodes: node[],
    region: string
  ) {
    this.ks = ks;
    this.ms = ms;
    this.km = km;
    this.nodes = nodes;
    this.region = region;
  }

  getCode() {
    return this.ks.slice(0, 5);
  }

  getNodesTxt() {
    let txt = "";
    for (const item of this.nodes) {
      txt += item.name + ",";
    }
    txt = txt.slice(0, txt.length - 1);
    return txt;
  }

  getNodesHTML() {
    let txt = "";
    this.nodes.forEach((i) => {
      txt = txt + i.name + "</br>";
    });
    return txt.slice(0, txt.length - 5);
  }

  getKMtxt() {
    if (this.km) {
      return this.km.length > 0 ? `${this.km}` : null;
    } else {
      return null;
    }
  }
}

export interface IStantionState {
  items: Stantion[];
  loading: boolean;
  error: string | null;
}

export enum StantionActionTypes {
  STANTION_FETCH_ERRORED = "STANTION_FETCH_ERRORED",
  STANTION_FETCH_SUCCESS = "STANTION_FETCH_SUCCESS",
  STANTION_LOADING_START = "STANTION_LOADING_START",
}

interface IStantionFethSuccess {
  type: StantionActionTypes.STANTION_FETCH_SUCCESS;
  payload: Stantion[];
}
interface IStantionFethError {
  type: StantionActionTypes.STANTION_FETCH_ERRORED;
  payload: string;
}
interface IStantionStartLoading {
  type: StantionActionTypes.STANTION_LOADING_START;
}
export interface IStantionState {
  items: Stantion[];
  loading: boolean;
  error: null | string;
}

export type StantionAction =
  | IStantionFethError
  | IStantionFethSuccess
  | IStantionStartLoading;

export type typeClickCallback = (event: React.MouseEvent<HTMLElement>) => void;

export type StantionSearchType = { name: string; code: string; region: string };
