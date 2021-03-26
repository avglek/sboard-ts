import { IConfigURL } from "../types/mapConfigType";

export default [
  {
    map: "tablo",
    url: "./svg/tablo.svg",
    img_leg: "./svg/legend.svg",
    img_spec: null,
    keys: ["main"],
  },
  {
    map: "big_tablo",
    url: "./svg/big_tablo.svg",
    img_leg: "./svg/big_legend.svg",
    img_spec: null,
    keys: ["big_main"],
  },
  {
    map: "nod1",
    url: "./svg/moscow.svg",
    img_leg: "./svg/moscow_legend.svg",
    img_spec: "./svg/moscow_legend_table.svg",
    keys: ["nod1", "go_moscow"],
  },
  {
    map: "nod2",
    url: "./svg/vit.svg",
    img_leg: "./svg/vit_legend.svg",
    img_spec: "./svg/vit_legend_table.svg",
    keys: ["nod2", "go_spb_vit"],
  },
  {
    map: "nod3",
    url: "./svg/spb.svg",
    img_leg: "./svg/spb_legend.svg",
    img_spec: "./svg/spb_legend_table.svg",
    keys: ["nod3", "go_spb"],
  },
  {
    map: "nod4",
    url: "./svg/petrozavodsk.svg",
    img_leg: "./svg/petrozavodsk_legend.svg",
    img_spec: "./svg/petrozavodsk_legend_table.svg",
    keys: ["nod4", "go_petrozavodsk"],
  },
  {
    map: "nod5",
    url: "./svg/murm.svg",
    img_leg: "./svg/murm_legend.svg",
    img_spec: "./svg/murm_legend_table.svg",
    keys: ["nod5", "go_murm"],
  },
  {
    map: "nod6",
    url: "./svg/volhov.svg",
    img_leg: "./svg/volhov_legend.svg",
    img_spec: "./svg/volhov_legend_table.svg",
    keys: ["nod6", "go_volhov"],
  },
  {
    map: "city",
    url: "./svg/city.svg",
    img_leg: "./svg/city_legend.svg",
    keys: ["city", "go_city"],
  },
] as IConfigURL[];
