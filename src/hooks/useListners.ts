import { selectAll, select } from "d3";
import { IConfigURL } from "../types/mapConfigType";
import { useActions } from "./useActions";
import { Dispatch } from "redux";
import { mapSvgAction, mapSvgActionTypes } from "../types/mapSvgType";

export const useListners = () => {
  const { loadMapSvg } = useActions();
  const updateSVG = (state: IConfigURL) => {
    selectAll("title").remove();
    console.log(state);
    eventRegion(loadMapSvg);
  };

  return { updateSVG };
};

function eventRegion(postSvg: {
  (selector: string):
    | ((dispatch: Dispatch<mapSvgAction>) => Promise<void>)
    | { type: mapSvgActionTypes; payload: string };
  (arg0: any): void;
}) {
  const regions = select("#buttons").selectAll("g");

  regions.on("click", (e) => {
    const current = e.currentTarget;
    const id = current.id;
    console.log("click:", current);
    console.log("id", id);
    postSvg(id);
  });
}
