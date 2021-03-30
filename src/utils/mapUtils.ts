import { Dispatch, RefObject } from "react";
import * as d3 from "d3";
//import { RootState } from "../store/reducers";
import { IMapDescript } from "../types/mapConfigType";
import mapConfig from "../config/configURL";
import { mapSvgAction, mapSvgActionTypes } from "../types/mapSvgType";
import { select } from "d3";

export function getMapConfig(
  selector: string | number | undefined
): IMapDescript | null {
  if (selector === undefined) {
    return null;
  }
  const result = mapConfig.find((item) => {
    if (typeof selector === "string") {
      const index = item.keys.indexOf(selector);
      return index >= 0;
    } else {
      return selector === item.uid;
    }
  });
  return result ? result : null;
}

export function loadSVG(url: string, ref: RefObject<HTMLDivElement>): void {
  d3.xml(url).then((xml) => {
    const svg = xml.documentElement;
    svg.setAttribute("preserveAspectRatio", "xMidYMin");
    ref.current!.appendChild(svg);
    d3.selectAll("title").remove();
  });
}

export function eventRegion(postSvg: {
  (selector: string):
    | ((dispatch: Dispatch<mapSvgAction>) => Promise<void>)
    | { type: mapSvgActionTypes; payload: string };
  (arg0: any): void;
}) {
  const regions = select("#buttons").selectAll("g");

  regions.on("click", (e) => {
    const current = e.currentTarget;
    const id = current.id;
    postSvg(id);
  });
}
