import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface Props {
  className: string;
}

const SpecReg: React.FC<Props> = ({className}) => {
  const { descript } = useTypedSelector(state => state.mapsvg)
  const spec = descript && descript.img_spec
  if (spec) {
    return (
      <div className={className}>
        <img src={spec} alt="specifecation" width="100%" />
      </div>
    );
  } else {
    return <div className={className}></div>;
  }
};

export default SpecReg;
