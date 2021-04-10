import { selectAll } from "d3";
import { LayerGroupDescript } from "../types/layerType";

export const scanLayers = (layers: LayerGroupDescript[]) => {
  console.log("scan layers", layers);
};

export function ShowLayer(layers: LayerGroupDescript[]) {
  layers.forEach((block) => {
    if (Array.isArray(block.data)) {
      block.data.forEach((element) => {
        if (element.show) {
          element.layer.split(" ").forEach((text) => {
            //addEventLayer(text.trim(), props);
            const selectLayer = selectAll("#" + text.trim());
            selectLayer.attr("opacity", "1");
          });
        } else {
          element.layer.split(" ").forEach((text) => {
            //removeEventLayer(text.trim(), props);
            const selectLayer = selectAll("#" + text.trim());
            selectLayer.attr("opacity", "0");
          });
        }
      });
    }
  });
}
