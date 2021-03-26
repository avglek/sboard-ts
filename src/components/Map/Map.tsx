import React, { useEffect, useRef } from "react";
import { useListners } from "../../hooks/useListners";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface Props {
  Width: number;
  Height: number;
}

const Map: React.FC<Props> = ({ Width, Height }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { map, params } = useTypedSelector((state) => state.mapsvg);
  const { updateSVG } = useListners();

  useEffect(() => {
    console.log("use map effect");
    if (map) {
      console.log(map);
      ref.current!.appendChild(map);
      params && updateSVG(params);
    }
  }, [map]);

  console.log("render");

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
