import { selectAll, xml } from "d3";
import React, { useEffect, useRef } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  fetchMapError,
  fetchMapSuccess,
  loadMap,
  setCallplace,
} from "../../store/actions/mapSvgAction";
import { useDispatch } from "react-redux";
import { useListners } from "../../hooks/useListners";
import { getMapConfig, hideDivision } from "../../utils/mapUtils";
import { loadStorage } from "../../utils/initUtils";
import { Actions } from "../../store/actions";
import DataService from "../../services/DataService";
import { useLayers } from "../../hooks/useLayers";
import { useSearchStantion } from "../../hooks/useSearchStantion";

interface Props {
  Width: number;
  Height: number;
  resetTransform: () => void;
}

const Map: React.FC<Props> = ({ Width, Height, resetTransform }) => {
  const dispatch = useDispatch();
  const { success, descript } = useTypedSelector((state) => state.mapsvg);
  const { addEvents, resetEvents } = useListners();
  const { uid } = useTypedSelector((state) => state.mapToggle);

  const ref = useRef<HTMLDivElement>(null);

  // Инициализация
  useEffect(() => {
    hideDivision();
    const init = loadStorage();
    dispatch(Actions.setConfMain(init));
    dispatch(Actions.fetchStantion());
    dispatch(Actions.fetchPicket());

    const dataSrevice = new DataService();
    dataSrevice.getPicket();
  }, [dispatch]);

  // Для переключения вида основной карты
  useEffect(() => {
    const initMap = getMapConfig(uid);

    if (initMap) {
      if (uid !== undefined) {
        dispatch(setCallplace(uid));
        dispatch(loadMap(initMap));
      }
    }
  }, [uid, dispatch]);

  useLayers();
  useSearchStantion();

  // Загрузка карты в div
  useEffect(() => {
    const load = async () => {
      if (descript) {
        //Старт загрузки карты
        dispatch(loadMap(descript));

        // Старт загрузки данных по слоям
        dispatch(Actions.fecthStorm(descript.uid));

        try {
          const svg = await xml(descript!.url);
          const element = svg.documentElement;
          element.setAttribute("preserveAspectRatio", "xMidYMin");
          ref.current!.innerHTML = "";
          ref.current!.appendChild(element);
          selectAll("title").remove();
          dispatch(fetchMapSuccess());
        } catch (e) {
          dispatch(fetchMapError(e));
        }
      }
    };

    load();
  }, [descript, dispatch]);

  // Установка слушателей
  useEffect(() => {
    dispatch(Actions.setResetZoom(resetTransform));
    if (success) {
      addEvents();
    }

    return () => resetEvents();
  }, [success, addEvents, resetEvents, resetTransform, dispatch]);

  return (
    <div
      ref={ref}
      style={{
        width: Width,
        height: Height,
      }}
    ></div>
  );
};

export default Map;
