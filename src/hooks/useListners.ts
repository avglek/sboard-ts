import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { Listners } from "../listners";
import { useTypedSelector } from "./useTypedSelector";
import { loadMap } from "../store/actions/mapSvgAction";
import { fetchReport } from "../store/actions/reportAction";

export const useListners = () => {
  const dispatch = useDispatch();
  const { descript, success, callplace } = useTypedSelector(
    (state) => state.mapsvg
  );
  const stantions = useTypedSelector((state) => state.stantion);
  const pickets = useTypedSelector((state) => state.picket);

  const addEvents = useCallback(() => {
    const postMap = bindActionCreators(loadMap, dispatch);
    const postReport = bindActionCreators(fetchReport, dispatch);

    if (success) {
      descript && Listners.addButtonListner(descript, postMap, callplace);
      Listners.addStantionListner(stantions, postReport);
      Listners.addPicketListner(pickets);
    }
  }, [descript, success, callplace, stantions, pickets, dispatch]);

  const resetEvents = useCallback(() => {
    Listners.resetButtonListner();
    Listners.resetStantionListner();
    Listners.resetPicketListner();
  }, []);

  return { addEvents, resetEvents };
};
