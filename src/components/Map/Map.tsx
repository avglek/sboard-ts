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
import { setConfMain } from "../../store/actions/mapToggleAction";
import { fetchStantion } from "../../store/actions/stantionAction";
import DataService from "../../services/DataService";
import { fetchPicket } from "../../store/actions/picketAction";
import { setResetZoom } from "../../store/actions/layerAction";
import { useLayers } from "../../hooks/useLayers";

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
    dispatch(setConfMain(init));
    dispatch(fetchStantion());
    dispatch(fetchPicket());

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

  // Загрузка карты в div
  useEffect(() => {
    const load = async () => {
      if (descript) {
        dispatch(loadMap(descript));
        try {
          const svg = await xml(descript!.url);
          const element = svg.documentElement;
          element.setAttribute("preserveAspectRatio", "xMidYMin");
          ref.current!.innerHTML = "";
          ref.current!.appendChild(element);
          selectAll("title").remove();
          console.log("render");

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
    dispatch(setResetZoom(resetTransform));
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
