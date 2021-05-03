import React, { useEffect } from "react";
import classes from "./Accordion.module.css";
import Accordion from "./Accordion";
import CheckBlock from "../CheckBlock/CheckBlock";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import {
  postLayer,
  setLastCheck,
} from "../../../../../store/actions/layerAction";
import { useDispatch } from "react-redux";
import { layersInit } from "../../../../../config/layerInit";
import { layersGroup } from "../../../../../config/layerGroups";

const AccordionBody: React.FC = () => {
  const { items } = useTypedSelector((state) => state.layer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postLayer(layersInit));
  }, [dispatch]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    uid: number
  ): void => {
    const layers = items.map((item) => {
      if (item.layer === e.currentTarget.name) {
        return {
          ...item,
          check: e.currentTarget.checked,
        };
      } else {
        return item;
      }
    });

    dispatch(postLayer(layers));

    const last = layers.find((i) => i.id === uid);
    if (last) dispatch(setLastCheck(last));
  };

  return (
    <div className={classes.AccordionBody}>
      {layersGroup.map((block) => {
        return (
          <Accordion key={block.group} title={block.title}>
            <CheckBlock
              idGroup={block.group}
              onChange={onChange}
              items={items}
            />
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionBody;
