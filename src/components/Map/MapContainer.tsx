import React from "react";
import "./MapContainer.css";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Map from "./Map";
import sizeMe from "react-sizeme";

interface IInons {
  zoomIn: string;
  zoomOut: string;
  zoomReset: string;
}
interface Props {
  size: { width: number; height: number };
  className: string;
}

const icons: IInons = {
  zoomIn: "./svg/icons/button/zoom.svg",
  zoomOut: "./svg/icons/button/out.svg",
  zoomReset: "./svg/icons/button/restore.svg",
};

const MapConteiner: React.FC<Props> = (props) => {
  const styleButtonZoom = {
    width: "20px",
    height: "20px",
  };

  const { width, height } = props.size;

  let w = width - 10;
  let h = height - 10;

  return (
    <TransformWrapper
      defaultScale={1}
      defaultPositionX={0}
      defaultPositionY={0}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rect }: any) => (
        <div>
          <div className="tools">
            <div className="tools-button" onClick={zoomIn}>
              <img src={icons.zoomIn} alt="+" style={styleButtonZoom} />
            </div>
            <div className="tools-button" onClick={zoomOut}>
              <img src={icons.zoomOut} alt="-" style={styleButtonZoom} />
            </div>
            <div className="tools-button" onClick={resetTransform}>
              <img src={icons.zoomReset} alt="x" style={styleButtonZoom} />
            </div>
          </div>
          <TransformComponent>
            <Map Width={w} Height={h} resetTransform={resetTransform} />
          </TransformComponent>
        </div>
      )}
    </TransformWrapper>
  );
};

export default sizeMe({ monitorHeight: true, monitorWidth: true })(
  MapConteiner
);
