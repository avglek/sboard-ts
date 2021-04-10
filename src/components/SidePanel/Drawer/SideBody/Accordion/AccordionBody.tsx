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
import { layersGroupInit } from "../../../../../config/layerGroupInit";

const AccordionBody: React.FC = () => {
  const { items } = useTypedSelector((state) => state.layer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postLayer(layersGroupInit));
  }, [dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.currentTarget.name;
    const check = e.currentTarget.checked;
    dispatch(setLastCheck({ name, check }));

    const layers = items.map((block) => {
      return {
        ...block,
        data: block.data.map((item) => {
          if (item.layer === name) {
            return {
              ...item,
              show: e.currentTarget.checked,
            };
          } else {
            return item;
          }
        }),
      };
    });

    dispatch(postLayer(layers));
  };

  return (
    <div className={classes.AccordionBody}>
      {items.map((block) => {
        return (
          <Accordion key={block.groupIndex} title={block.title}>
            <CheckBlock blockCheck={block.data} onChange={onChange} />
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionBody;
