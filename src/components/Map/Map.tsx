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
import { useListnerButton } from "../../hooks/useListnerButton";
import { getMapConfig } from "../../utils/mapUtils";
import { loadStorage } from "../../utils/initUtils";
import { setConfMain } from "../../store/actions/mapConfAction";

interface Props {
  Width: number;
  Height: number;
}

const Map: React.FC<Props> = ({ Width, Height }) => {
  const dispatch = useDispatch();
  const { success, descript } = useTypedSelector((state) => state.mapsvg);
  const { addEventButton, resetEventButton } = useListnerButton();
  const { uid } = useTypedSelector((state) => state.mapconf);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = loadStorage();
    dispatch(setConfMain(init));
  }, [dispatch]);

  useEffect(() => {
    const initMap = getMapConfig(uid);

    if (initMap) {
      if (uid !== undefined) {
        dispatch(setCallplace(uid));
        dispatch(loadMap(initMap));
      }
    }
  }, [uid, dispatch]);

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

          dispatch(fetchMapSuccess());
        } catch (e) {
          dispatch(fetchMapError(e));
        }
      }
    };

    load();
  }, [descript, dispatch]);

  useEffect(() => {
    if (success) {
      addEventButton();
    }

    return () => resetEventButton();
  }, [success, addEventButton, resetEventButton]);

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
