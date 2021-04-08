import { IMapDescript } from "../types/mapSvgType";
import mapConfig from "../config/configURL";
import { select } from "d3";
import { Stantion, typeClickCallback } from "../types/stantionType";
import classes from "../App.module.css";

// Получение описателя карты по ключу или ID
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

// Показ всплывающей подсказки
export function showToolTip(text = "", x = 0, y = 0, vid = "auto"): void {
  if (text === "") {
    return;
  }
  select("#stooltip").html(text);
  const h = select("#stooltip").style("height");
  const dy = Number.parseInt(h.substr(0, h.length - 2)) + 15;

  switch (vid) {
    case "auto":
      if (y - (dy + 5) < 0) {
        select("#stooltip").style("top", y + 15 + "px");
      } else {
        select("#stooltip").style("top", y - dy + "px");
      }
      break;
    case "down":
      select("#stooltip").style("top", y + 15 + "px");
      break;
    case "up":
      select("#stooltip").style("top", y - dy + "px");

      break;
    default:
      break;
  }

  select("#stooltip").style("left", x + "px");
  select("#stooltip").style("visibility", "visible");
}

// Скрыть всплывающую подсказку
export function hiddenTootTip() {
  select("#stooltip").style("visibility", "hidden");
  select("#stooltip").html("");
  select("#stooltip").style("heigth", "");
}

// Показать контекстное меню(список предприятий на станции)
export function showContext(
  stn: Stantion,
  callback: typeClickCallback,
  x = 0,
  y = 0
) {
  select("#context").selectAll("div").remove();

  select("#stooltip").style("visibility", "hidden");

  const context = select("#context");

  stn.nodes.forEach((item) => {
    context
      .append("div")
      .attr("id", item.id)
      .attr("class", classes.node + " " + classes.bgcolor)
      .text(item.name)
      .on("click", (e) => callback(e));
  });

  let h = select("#context").style("height");
  let w = select("#context").style("width");
  let dy = Number.parseInt(h.substr(0, h.length - 2)) + 10;
  let dx = Number.parseInt(w.substr(0, w.length - 2)) + 10;

  if (y - dy < 0) {
    select("#context").style("top", y - 10 + "px");
    select("#context").style("left", x - dx + "px");
    select("#context").style("visibility", "visible");
  } else {
    select("#context").style("top", y - dy + "px");
    select("#context").style("left", x - dx + "px");
    select("#context").style("visibility", "visible");
  }
}

export function hideDivision(): void {
  select("body").on("click", () => {
    select("#context").style("visibility", "hidden");
  });
}
