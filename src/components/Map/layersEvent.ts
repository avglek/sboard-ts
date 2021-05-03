import { Dispatch } from "react";
import { layerEvent } from "../../layers";
import { StormState } from "../../types/stormType";

export function addEventLayer(
  layerId: string,
  props: any,
  dispatch: Dispatch<any>
) {
  switch (layerId) {
    case "trains_distantions":
      const { items }: StormState = props.storm;
      const reg = props.mapsvg.descript.uid;
      layerEvent.storm.addEventLayer(items, reg, dispatch);
      return;
    // case "snow_tech":
    //   layerEvent.snow.loadSnowStatus(props);
    //   layerEvent.snow.addSnowTechEvent(props);
    //   break;
    // case "weather_st":
    //   layerEvent.weather.loadWeatherIcon(props);
    //   break;
    // case "bridges":
    //   layerEvent.bridges.eventBridgeHandler(props);
    //   break;
    // case "tubes":
    //   layerEvent.pipe.loadPipeCount(props);
    //   layerEvent.pipe.eventPipeHandler(props);
    //   break;
    // case "health_org":
    //   layerEvent.health.eventHealthHandler(props);
    //   break;
    // case "spec_trains":
    //   layerEvent.spec.eventSpecTrains(props);
    //   break;
    // case "mil_rails":
    //   layerEvent.milRails.addEvent(props);
    //   break;
    // case "dnc":
    //   layerEvent.dnc.addEvent(props);
    //   break;
    default:
      return;
  }
}

export function removeEventLayer(layerId: string) {
  switch (layerId) {
    case "trains_distantions":
      layerEvent.storm.removeEventsLayers();

      return;
    // case "snow_tech":
    //   layerEvent.snow.resetSnowTechEvent();
    //   break;
    // case "weather_st":
    //   layerEvent.weather.cleanIconWeather();
    //   break;
    // case "bridges":
    //   layerEvent.bridges.resetBridgeHandler();
    //   break;
    // case "tubes":
    //   layerEvent.pipe.resetPipeHandler();
    //   break;
    // case "health_org":
    //   layerEvent.health.resetHealthHandler();
    //   break;
    // case "spec_trains":
    //   layerEvent.spec.resetSpecTrains();
    //   break;
    // case "mil_rails":
    //   layerEvent.milRails.resetEvent();
    //   break;
    // case "dnc":
    //   layerEvent.dnc.resetEvent();
    //   break;
    default:
      return;
  }
}
