import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface Props {
  className: string;
}

const Legend: React.FC<Props> = ({ className }) => {
  const { descript } = useTypedSelector((state) => state.mapsvg);
  const legend = descript && descript.img_leg;

  if (legend) {
    return (
      <div className={className}>
        <img src={legend} alt="legend" width="100%" />
      </div>
    );
  } else {
    return <div className={className}></div>;
  }
};

export default Legend;
