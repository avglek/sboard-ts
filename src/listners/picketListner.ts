import React from "react";
import { selectAll } from "d3";
import { hiddenTootTip, showToolTip } from "../utils/mapUtils";
import { IPicketState, Picket } from "../types/picketTypes";

export const addPicketListner = (picket: IPicketState): void => {
  if (!picket.loading && !picket.error) {
    const piketElements = selectAll("#terms > *");
    piketElements
      .on("mouseenter", (e) => piketMouseIn(e, picket.items))
      .on("mouseleave", (e) => piketMouseLeave(e))
      .on("click", (e) => piketClick(e));
  }
};

export const resetPicketListner = (): void => {
  const piketElements = selectAll("#terms > *");
  piketElements.on("mouseenter", null).on("mouseleave", null).on("click", null);
};

const piketMouseIn = (
  e: React.MouseEvent<HTMLElement>,
  items: Picket[]
): void => {
  if (e.currentTarget) {
    e.currentTarget.setAttribute("opacity", "1");
    const id = e.currentTarget.id;
    const picket = items.find((p) => p.id === id);

    if (picket) {
      const txt = picket.getParamsTxt();

      showToolTip(txt, e.clientX, e.clientY);
    }
  }
};

const piketMouseLeave = (e: React.MouseEvent<HTMLElement>): void => {
  e.currentTarget.setAttribute("opacity", "0.4");
  hiddenTootTip();
};

const piketClick = (e: React.MouseEvent<HTMLElement>): void => {
  console.log("click:", e.currentTarget);
};
