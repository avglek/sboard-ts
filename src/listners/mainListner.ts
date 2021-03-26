import { Dispatch } from "redux";
import { mapSvgAction, mapSvgActionTypes } from "../types/mapSvgType";
import * as d3 from "d3";
import { IConfigURL } from "../types/mapConfigType";
import { loadMapSvg } from "../store/actions/mapSvgAction";

// export const mainListner = <mapSvgAction>(state: IConfigURL) => {
//   d3.selectAll("title").remove();
//   console.log(state);
//   eventRegion();
// };

// function eventRegion() {
//   const regions = d3.select("#buttons").selectAll("g");

//   regions.on("click", (e) => {
//     console.log("click:", e.currentTarget);
//   });
//   return loadMapSvg();
// }
export const mainListner = () => {
  return (dispatch: Dispatch<mapSvgAction>) => {};
};
