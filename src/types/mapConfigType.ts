export interface IConfigURL {
  map: string;
  url: string;
  img_leg: string | null;
  img_spec: string | null;
  keys: Array<string>;
}

export type ConfigURLType = IConfigURL | undefined;
