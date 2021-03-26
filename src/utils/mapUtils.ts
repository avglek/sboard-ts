import { RefObject } from "react";
import * as d3 from "d3";
//import { RootState } from "../store/reducers";
import { ConfigURLType } from "../types/mapConfigType";
import mapConfig from "../config/configURL";

export function getMapConfig(selector: string): ConfigURLType {
  return mapConfig.find((item) => {
    const index = item.keys.indexOf(selector);
    return index >= 0;
  });
}

export function loadSVG(url: string, ref: RefObject<HTMLDivElement>): void {
  d3.xml(url).then((xml) => {
    const svg = xml.documentElement;
    svg.setAttribute("preserveAspectRatio", "xMidYMin");
    ref.current!.appendChild(svg);
    d3.selectAll("title").remove();
  });
}

// export function mapEvents(action: any, store: RootState): void {
//   d3.selectAll("title").remove();
//   const { params } = store.mapsvg;

//   if (params) {
//     if (params.map === "tablo") {
//       eventsTablo(action, store);
//     }
//   }
// }

// function eventsTablo(action: any, store: RootState): void {
//   const regions = d3.select("#buttons").selectAll("g");

//   regions
//     .on("mouseenter", null)
//     .on("mouseleave", null)
//     .on("click", (e: MouseEvent) => reg_click(e, action));
// }

// function reg_click(e: MouseEvent, action: any) {
//   console.log(e.currentTarget);
//   const el = e.currentTarget as HTMLElement;
//   const str = el.getAttribute("id");
//   console.log(str);
//   if (str) {
//     const map = getMap(str);
//     console.log(map);
//     action.loadMapSvg(map);
//   }
// }
//let node = d3.select(this).attr("id");

// if (node != null) {
//   let url = regions[node].url;
//   if (typeof url !== undefined) {
//     let img = regions[node].img_leg;
//     parentProps.postLegend(img);
//     parentProps.postSpec(
//       regions[node].img_spec ? regions[node].img_spec : null
//     );

//     // const prognozUrl = config.prognoz.toString() + regions[node].id;
//     // parentProps.forecastFetchData(prognozUrl);
//     parentProps.forecastFetchData(regions[node].id);
//     parentProps.forecastOpen();
//     //parentProps.postStormIconsFetch(regions[node].id);
//     loadRegions(url, regions[node].id);
//   }
//   // }
// }

// function reg_mouseout() {
//   d3.select(this).selectAll("rect").attr("fill-opacity", "0.35");
// }

// function reg_mousein() {
//   let d = d3.select(this).selectAll("rect");
//   d.attr("fill-opacity", "1");
// }
