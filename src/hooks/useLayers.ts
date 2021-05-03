import { useEffect, useRef } from "react";
import { LayerDescript } from "../types/layerType";
import { useTypedSelector } from "./useTypedSelector";
import { useDispatch } from "react-redux";
import { showLayer, scanLayers } from "../utils/layerUtils";
import { addEventLayer, removeEventLayer } from "../components/Map/layersEvent";

export const useLayers = () => {
  const dispatch = useDispatch();
  const props = useTypedSelector((state) => state);
  const { items, lastCheck, clear } = props.layer;
  const { success } = props.mapsvg;

  const refLayers = useRef<LayerDescript[]>([]);
  refLayers.current = items;

  const refProps = useRef<any>(null);
  refProps.current = props;

  // Показать (скрыть) слои при загрузке и очистке
  useEffect(() => {
    if (success) {
      scanLayers(refLayers.current);
      refLayers.current.forEach((item) => {
        if (item.check) {
          addEventLayer(item.layer, refProps.current, dispatch);
        }
      });

    }
  }, [success, dispatch, clear]);

  // Клик на чекбоксе слоя
  useEffect(() => {
    if (lastCheck) {
      showLayer(lastCheck);
      if (lastCheck.check) {
        addEventLayer(lastCheck.layer, refProps.current, dispatch);
      } else {
     removeEventLayer(lastCheck.layer);
      }
    }

  }, [lastCheck, dispatch]);
};

