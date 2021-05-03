import { selectAll } from "d3";
import { LayerDescript } from "../types/layerType";

export function showLayer(layer: LayerDescript) {
  if (layer.check) {
    layer.layer.split(" ").forEach((text: string) => {
      const selectLayer = selectAll("#" + text.trim());
      selectLayer.attr("opacity", "1");
    });
  } else {
    layer.layer.split(" ").forEach((text: string) => {
      const selectLayer = selectAll("#" + text.trim());
      selectLayer.attr("opacity", "0");
    });
  }
}

export function scanLayers(layers: LayerDescript[]) {
  layers.forEach((element) => {
    if (element.check) {
      element.layer.split(" ").forEach((text: string) => {
        const selectLayer = selectAll("#" + text.trim());
        selectLayer.attr("opacity", "1");
      });
    } else {
      element.layer.split(" ").forEach((text: string) => {
        const selectLayer = selectAll("#" + text.trim());
        selectLayer.attr("opacity", "0");
      });
    }
  });
}

export function showFindStantion(
  FindStantion: string,
  iconUID = "point-fill",
  iconClass = "pointer"
) {
  const href = `./svg/sprite/point-sprite.svg#${iconUID}`;

  if (FindStantion !== "") {
    const allStn = selectAll("#stations");
    allStn.selectAll(`use[href="${href}"]`).remove();

    if (FindStantion !== "0") {
      const stnNode = allStn.selectAll(`#st_${FindStantion}`);
      const anchorNode = stnNode.select("#st");
      const iconNode = anchorNode.append("use");

      iconNode
        .attr("class", iconClass)
        .attr("href", href)
        .attr("width", "40px")
        .attr("height", "50px")
        .attr("x", "-10px")
        .attr("y", "-50px");
    }
  }
}
