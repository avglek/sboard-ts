import { useCallback } from "react";
import { Listners } from "../listners";

import { useTypedSelector } from "./useTypedSelector";
import { loadMap } from "../store/actions/mapSvgAction";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useListnerButton = () => {
  const dispatch = useDispatch();
  const { descript, success, callplace } = useTypedSelector(
    (state) => state.mapsvg
  );

  const addEventButton = useCallback(() => {
    const postMap = bindActionCreators(loadMap, dispatch);
    if (success) {
      descript && Listners.addButtonListner(descript, postMap, callplace);
    }
  }, [descript, success, callplace, dispatch]);

  const resetEventButton = useCallback(() => {
    Listners.resetButtonListner();
  }, []);

  return { addEventButton, resetEventButton };
};
