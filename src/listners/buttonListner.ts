import { select } from "d3";
import React from "react";
import { IMapDescript } from "../types/mapConfigType";
import { mapSvgAction } from "../types/mapSvgType";
import { getMapConfig } from "../utils/mapUtils";

type postAction = (payload: IMapDescript) => mapSvgAction;

export const resetButtonListner = (): void => {
  const regions = select("#buttons").selectAll("g");
  regions.on("mouseenter", null).on("mouseleave", null).on("click", null);
  const closeBtn = select("#close_button");
  closeBtn.on("click", null).on("mouseenter", null).on("mouseleave", null);
  const goRegions = select("#go_region").selectAll("g[id^='go_']");
  goRegions.on("mouseenter", null).on("mouseleave", null).on("click", null);
};

export const addButtonListner = (
  descript: IMapDescript,
  postMap: postAction,
  callplace = 0
): void => {
  const regions = select("#buttons").selectAll("g");

  regions
    .on("mouseenter", (e) => fillOpacityRect(e, "1"))
    .on("mouseleave", (e) => fillOpacityRect(e, "0.35"))
    .on("click", (e) => doLoadMap(e, postMap));

  const closeBtn = select("#close_button");

  closeBtn
    .on("click", () => returnMain(postMap, callplace))
    .on("mouseenter", () => closeBtn.attr("opacity", "0.98"))
    .on("mouseleave", () => closeBtn.attr("opacity", "0.595982143"));

  const goRegions = select("#go_region").selectAll("g[id^='go_']");

  goRegions
    .on("mouseenter", (e) => fillOpacity(e, "0.595982143"))
    .on("mouseleave", (e) => fillOpacity(e, "0.98"))
    .on("click", (e) => doLoadMap(e, postMap));
};

function fillOpacityRect(e: MouseEvent, opacity: string) {
  const node = e.currentTarget as HTMLElement;
  const id = node.id;
  if (id) {
    select(`#${id}`).selectAll("rect").attr("fill-opacity", opacity);
  }
}

function fillOpacity(e: React.MouseEvent<HTMLElement>, opacity: string) {
  const node = e.currentTarget;
  const id = node.id;
  if (id) {
    select(`#${id}`).attr("fill-opacity", opacity);
  }
}

const returnMain = (loadMap: any, fromId: number = 0) => {
  const desc = getMapConfig(fromId);
  if (desc) {
    loadMap(desc);
  }
};

const doLoadMap = (e: React.MouseEvent<HTMLElement>, loadMap: any) => {
  const node = e.currentTarget;
  const id = node.id;
  if (id) {
    const desc = getMapConfig(id);
    if (desc) {
      loadMap(desc);
    }
  }
};
