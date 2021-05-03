import { select, selectAll } from "d3";
import { Dispatch } from "react";
import { loadMap } from "../store/actions/mapSvgAction";
import { fetchReport } from "../store/actions/reportAction";
import { ICondition, StormItem } from "../types/stormType";
import { getMapConfig, hiddenTootTip, showToolTip } from "../utils/mapUtils";

const ICON_STORM = "./svg/sprite/storm-sprite.svg#storm_2";
const ICON_CRITICAL = "./svg/sprite/storm-sprite.svg#storm_0";

export const addEventLayer = (
  items: StormItem[],
  uid: number = 0,
  dispatch: Dispatch<any>
) => {
  items.forEach((item) => {
    viewStormIcon(item, uid, dispatch);
  });

  function viewStormIcon(
    item: StormItem,
    uid: number,
    dispatch: Dispatch<any>
  ) {
    const icon = isCritical(item) ? ICON_CRITICAL : ICON_STORM;

    const trainNode = select(`#dist_${item.train}`);
    trainNode.attr("opacity", "1");

    const anchorNode = trainNode.select("#icon");
    anchorNode.selectAll("use").remove();
    const iconNode = anchorNode.append("use");

    iconNode
      .attr("class", "storm-icon")
      .attr("href", icon)
      .attr("width", "30px")
      .attr("height", "20px")
      .attr("x", "0")
      .attr("y", "0");

    iconNode
      .on("click", () => eventClick(item.train, uid, dispatch))
      .on("mouseenter", (e) => {
        showToolTip(getHitsText(item), e.clientX, e.clientY);
        iconNode.style("cursor", "pointer");
      })
      .on("mouseleave", () => {
        hiddenTootTip();
        iconNode.style("cursor", "default");
      });

    if (uid > 0 && uid < 10) {
      const critical = item.conditions.filter((i) => i.critical);

      critical.forEach((item: ICondition, index: number) => {
        const itemNode = anchorNode.append("use");
        const href = `./svg/sprite/storm-sprite.svg#storm_${item.code}`;

        const dX = 34 + index * 22;

        itemNode
          .attr("class", "storm-icon")
          .attr("href", href)
          .attr("width", "20px")
          .attr("height", "20px")
          .attr("x", dX)
          .attr("y", "0");

        itemNode
          .on("mouseenter", (e) => showToolTip(item.info, e.clientX, e.clientY))
          .on("mouseleave", () => hiddenTootTip());
      });
    }
  }

  const getHitsText = ({ conditions }: StormItem): string => {
    let result = "";
    if (conditions[0].info === "") return "";
    conditions.forEach((value) => {
      result =
        result +
        `${value.begin}<br/>${value.end}<br/><b>
      ${value.info.split(";").join("<br/>")}</b><hr/>`;
    });

    return result.substr(0, result.length - 5);
  };

  function isCritical(item: StormItem): boolean {
    const critical = item.conditions.filter((i) => i.critical);
    return critical.length > 0;
  }

  function eventClick(
    train: string,
    id: number,
    dispatch: Dispatch<any>
  ): void {
    if (id === 0 || id === 10) {
      const desc = getMapConfig(Number.parseInt(train));
      if (desc) dispatch(loadMap(desc));
    } else {
      dispatch(fetchReport("storm_report", train));
    }
  }
};

export function removeEventsLayers() {
  resetEvents();
  clearLayer();
}

function resetEvents() {
  selectAll("#trains_distantions")
    .selectAll("#icon")
    .selectAll("use")
    .on("mouseenter", null)
    .on("mouseleave", null)
    .on("click", null);
}

function clearLayer() {
  selectAll("#icon").selectAll("use").remove();
  selectAll("#trains_distantions > *").attr("opacity", "0");
}
