import React from "react";
import { selectAll } from "d3";
import { hiddenTootTip, showContext, showToolTip } from "../utils/mapUtils";
import { IStantionState, Stantion } from "../types/stantionType";

type postAction = any;

export const addStantionListner = (
  stn: IStantionState,
  postReport: postAction
): void => {
  if (!stn.loading && !stn.error) {
    const stansions = selectAll("#st");

    stansions
      .on("mouseenter", (e) => stnMouseEnterHandler(e, stn.items))
      .on("mouseleave", () => stnMouseLeaveHandler())
      .on("click", (e) => stnClickHandler(e, stn.items, postReport));
  }
};

export const resetStantionListner = (): void => {
  const stansions = selectAll("#st");
  stansions.on("mouseenter", null).on("mouseleave", null).on("click", null);
};

const stnClickHandler = (
  e: React.MouseEvent<HTMLElement>,
  items: Stantion[],
  postReport: postAction
): void => {
  if (e.currentTarget.parentElement) {
    const id = e.currentTarget.parentElement.id;

    const stn = items.find((i) => i.ks.slice(0, 5) === id.slice(3));
    if (stn) {
      showContext(
        stn,
        (e) => clickNode(e, postReport, stn.ms),
        e.clientX,
        e.clientY
      );
      e.stopPropagation();
    }
  }
};

const stnMouseEnterHandler = (
  e: React.MouseEvent<HTMLElement>,
  items: Stantion[]
): void => {
  if (e.currentTarget.parentElement) {
    const id = e.currentTarget.parentElement.id;

    const stn = items.find((i) => i.ks.slice(0, 5) === id.slice(3));
    if (stn) {
      const text = stn.getNodesHTML() + "<hr>" + stn.getKMtxt();
      showToolTip(text, e.clientX, e.clientY);
    }
  }
};

const stnMouseLeaveHandler = (): void => {
  hiddenTootTip();
};

const clickNode = (
  event: React.MouseEvent<HTMLElement>,
  postReport: postAction,
  stantion: string
): void => {
  const uid = event.currentTarget.id;
  const title = `${stantion} :  ${event.currentTarget.textContent}`;

  postReport("pokaz", uid, title);
};
