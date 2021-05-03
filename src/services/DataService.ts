import { Stantion } from "../types/stantionType";
import { Picket } from "../types/picketTypes";
//import { StormItem } from "../types/stormType";

declare var __INITIAL_STATE__: any;

const applicationInitialState = __INITIAL_STATE__;
const config = applicationInitialState.config;

// eslint-disable-next-line
function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class DataService {
  private async getResurce(url: string) {
    //await timeout(3000);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Cloud not fetch ${url}, received ${response.status}`);
    } else {
      return await response.json();
    }
  }

  async getReport(report: string, uid: string) {
    //await timeout(1000);
    switch (report) {
      default:
        const data = await this.getResurce(`${config[report]}${uid}`);

        const info = {
          header: "Информация",
          view: "info",
          data: data.info,
        };
        return { ...data, info };
    }
  }

  async getPicket() {
    const { data } = await this.getResurce(config.picket);
    const pickets: Picket[] = [];

    data.forEach((item: any) => {
      const picket = new Picket(item.code, item.id_piket, [
        item.param1,
        item.param2,
        item.param3,
      ]);
      pickets.push(picket);
    });
    return pickets;
  }
  async getStantions() {
    const stantion: Stantion[] = [];

    const response = await this.getResurce(config.divisions);

    for (const t of response) {
      let stn = new Stantion(t.ks, t.ms, t.km, t.nodes, t.region);
      stantion.push(stn);
    }

    return stantion;
  }

  async getMenu() {
    const response = await this.getResurce(config.menu);
    const data = response.left_box.map((item: { disabled: string }) => {
      return {
        ...item,
        disabled: item.disabled === "true",
      };
    });
    return data;
  }

  async getPrognoz(id: number) {
    return await this.getResurce(`${config.prognoz}${id}`);
  }

  async getStorm(id: number) {
    //await timeout(2000);
    if (id === 0 || id === 10) {
      const data = await this.getResurce(config.storm_all);
      return data.map((item: any) => {
        return {
          train: item.region,
          conditions: [
            {
              code: 0,
              info: "",
              begin: "",
              end: "",
              critical: item.critical,
            },
          ],
        };
      });
    } else {
      return await this.getResurce(`${config.storm_region}${id}`);
    }
  }
}

export default DataService;
