import React, { useEffect, useState } from "react";
import LoaderSpinner from "./LoaderSpinner";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setSuccess } from "../../store/actions/mapSvgAction";
import { useDispatch } from "react-redux";

const LoaderConteiner: React.FC = () => {
  const state = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  const navLoading = state.navbar.loading;
  const mapLoading = state.mapsvg.loading;
  const stnLoading = state.stantion.loading;
  const picketLoading = state.picket.loading;
  const stormLoading = state.storm.loading;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (
      navLoading ||
      mapLoading ||
      stnLoading ||
      picketLoading ||
      stormLoading
    ) {
      setIsLoading(true);
    } else {
      dispatch(setSuccess());
      setIsLoading(false);
    }
  }, [
    dispatch,
    navLoading,
    mapLoading,
    stnLoading,
    picketLoading,
    stormLoading,
  ]);

  if (isLoading) return <LoaderSpinner />;
  else return null;
};

export default LoaderConteiner;
